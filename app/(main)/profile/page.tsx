"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs"; // Clerk's useUser hook to get the logged-in user's details
import toast from "react-hot-toast";
import Image from "next/image";

// Define types for order item and order
type OrderItem = {
  id: string;
  quantity: number;
  item: {
    name: string;
    price: number;
    imgSrc?: string;
  };
};

type Order = {
  id: string;
  createdAt: string;
  status: string; // Add status to the Order type
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
          {orders
            .slice()
            .reverse()
            .map((order) => (
              <div
                key={order.id}
                className={`border p-4 rounded-lg shadow ${
                  order.status === "PENDING" ? "bg-blue-200" : ""
                }`}
              >
                <h2 className='text-xl font-semibold mb-2 flex justify-between'>
                  <span> Order #{order.id} </span>
                  <p>
                    Status: <span className='font-medium'>{order.status}</span>
                  </p>
                </h2>

                <p className='text-gray-600 mb-4'>
                  Submitted on {new Date(order.createdAt).toLocaleString()}
                </p>
                <ul>
                  {order.items.map((orderItem) => (
                    <li key={orderItem.id} className='flex justify-between'>
                      <div className='flex items-center'>
                        <span>
                          {orderItem.item.name} (x{orderItem.quantity})
                        </span>
                        {
                          <Image
                            alt='image-item'
                            width={40}
                            height={40}
                            src={orderItem.item.imgSrc || "/no-image.jpg"}
                          />
                        }
                      </div>
                      <span>{orderItem.item.price * orderItem.quantity}$</span>
                    </li>
                  ))}
                </ul>
                <div className='text-xl font-semibold flex justify-end mt-6'>
                  <span>Total:&nbsp;</span>
                  {order.items.reduce(
                    (sum, orderItem) =>
                      sum + orderItem.item.price * orderItem.quantity,
                    0
                  )}
                  $
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
