"use client";

import { Item } from "@/lib/items";
import React, { createContext, useContext, useState, ReactNode } from "react";

type OrderContextType = {
  cart: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (item: Item) => void;
  deleteFromCart: (item: Item) => void;
  submitOrder: () => void;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Item[]>([]);
  const addToCart = (item: Item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex >= 0) {
        // If the item exists in the cart, update its amount
        const updatedCart = prevCart.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, amount: (cartItem.amount ?? 0) + 1 } // Default to 0 if undefined
            : cartItem
        );
        return updatedCart;
      } else {
        // If the item doesn't exist, add it to the cart with amount defaulting to 1
        return [...prevCart, { ...item, amount: item.amount ?? 1 }];
      }
    });
  };

  const removeFromCart = (item: Item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex >= 0) {
        // If the item exists in the cart and the amount is greater than 1, decrease the amount
        const updatedCart = prevCart.map((cartItem, index) =>
          index === existingItemIndex
            ? {
                ...cartItem,
                amount:
                  (cartItem.amount ?? 1) > 1 ? (cartItem.amount ?? 1) - 1 : 1, // Handle undefined by defaulting to 1
              }
            : cartItem
        );

        // If the amount was reduced to 0, remove the item from the cart
        if ((updatedCart[existingItemIndex].amount ?? 0) === 0) {
          return updatedCart.filter((_, index) => index !== existingItemIndex);
        }

        return updatedCart;
      } else {
        // If the item doesn't exist in the cart, return the previous cart state unchanged
        return prevCart;
      }
    });
  };

  const deleteFromCart = (item: Item) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  };

  const submitOrder = () => {
    // Here you would send the order to the server or perform another action
    console.log("Order submitted:", cart);
    setCart([]);
  };

  return (
    <OrderContext.Provider
      value={{ cart, addToCart, removeFromCart, deleteFromCart, submitOrder }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
};
