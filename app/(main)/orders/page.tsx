"use client";

import { useEffect, useState } from "react";

type OrderItem = {
  id: string;
  quantity: number;
  item: {
    name: string;
    price: number;
  };
};

type Order = {
  id: string;
  createdAt: string;
  items: OrderItem[];
};

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await fetch("/api/orders");
      const data = await res.json();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  return (
    <div className='p-8'>
      <h1 className='text-2xl font-bold mb-4'>Orders</h1>
      <div className='grid grid-cols-1 gap-4'>
        {orders.map((order) => (
          <div key={order.id} className='border p-4 rounded-lg shadow'>
            <h2 className='text-xl font-semibold mb-2'>Order #{order.id}</h2>
            <p className='text-gray-600 mb-4'>
              Submitted on {new Date(order.createdAt).toLocaleString()}
            </p>
            <ul>
              {order.items.map((orderItem) => (
                <li key={orderItem.id} className='flex justify-between'>
                  <span>
                    {orderItem.item.name} (x{orderItem.quantity})
                  </span>
                  <span>${orderItem.item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
