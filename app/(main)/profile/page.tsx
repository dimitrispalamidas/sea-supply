"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs"; // Clerk's useUser hook to get the logged-in user's details
import toast from "react-hot-toast";

// Define types for order item and order
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

const ProfilePage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]); // Define the state to hold orders
  const { isSignedIn, user } = useUser(); // Retrieve user data

  // Fetch user orders
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (!isSignedIn) {
          toast.error("You need to be signed in to view your orders.");
          return;
        }

        const res = await fetch("/api/myorders"); // Fetch orders from the API
        console.log("Response Status:", res.status); // Log status to check for issues
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        console.log("Orders Data:", data); // Log fetched data for debugging
        setOrders(data); // Set fetched orders to state
      } catch (error) {
        console.error("Failed to fetch orders:", error);
        toast.error("Failed to fetch orders");
      }
    };

    fetchOrders();
  }, [isSignedIn]);

  // If the user is not signed in, prompt to sign in
  if (!isSignedIn) {
    return <p>Please sign in to view your orders.</p>;
  }

  return (
    <div className='p-8'>
      <h1 className='text-2xl font-bold mb-4'>My Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
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
      )}
    </div>
  );
};

export default ProfilePage;
