"use client";

import { Item as PrismaItem } from "@prisma/client";
import { createContext, useContext, useState, ReactNode } from "react";
import toast from "react-hot-toast";

// Extend Prisma's Item type to include quantity
type CartItem = PrismaItem & {
  quantity: number;
};

type OrderContextType = {
  cart: CartItem[];
  addToCart: (item: PrismaItem) => void;
  removeFromCart: (item: PrismaItem) => void;
  deleteFromCart: (item: PrismaItem) => void;
  submitOrder: () => void;
};

const OrderContext = createContext<OrderContextType | null>(null);

export const useOrder = (): OrderContextType => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
};

type OrderProviderProps = {
  children: ReactNode;
};

export const OrderProvider = ({ children }: OrderProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: PrismaItem) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((cartItem) => cartItem.id === item.id);

      if (itemExists) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (item: PrismaItem) => {
    setCart((prevCart) =>
      prevCart
        .map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  const deleteFromCart = (item: PrismaItem) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== item.id)
    );
  };

  const submitOrder = async () => {
    try {
      const res = await fetch("/api/myorders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cart),
      });

      if (res.ok) {
        toast.success("Order submitted successfully!");
        setCart([]); // Clear the cart after submission
      } else {
        toast.error("Order submission failed");
        console.error("Order submission failed");
      }
    } catch (error) {
      toast.error("Error submitting order");
      console.error("Error submitting order:", error);
    }
  };

  return (
    <OrderContext.Provider
      value={{ cart, addToCart, removeFromCart, deleteFromCart, submitOrder }}
    >
      {children}
    </OrderContext.Provider>
  );
};
