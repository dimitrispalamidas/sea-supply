"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Item = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
};

type OrderContextType = {
  cart: Item[];
  addToCart: (item: Item) => void;
  submitOrder: () => void;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Item[]>([]);

  const addToCart = (item: Item) => {
    setCart([...cart, item]);
  };

  const submitOrder = () => {
    // Here you would send the order to the server or perform another action
    console.log("Order submitted:", cart);
    setCart([]);
  };

  return (
    <OrderContext.Provider value={{ cart, addToCart, submitOrder }}>
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
