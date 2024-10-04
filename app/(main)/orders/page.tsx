"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useUser } from "@clerk/nextjs";

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
  status: string;
};

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const { user, isLoaded, isSignedIn } = useUser(); // Get the user from Clerk

  const fetchOrders = async () => {
    try {
      const res = await fetch("/api/allorders");
      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      console.log(data);
      setOrders(data);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
      toast.error("Failed to fetch orders");
    }
  };

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      fetchOrders();
    }
  }, [isLoaded, isSignedIn]);

  // Function to update the order status (Captain or Store Manager actions)
  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/updateorder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderId: orderId, status: newStatus }),
      });

      if (!res.ok) {
        throw new Error(`Failed to update order status`);
      }

      toast.success(
        `Order ${newStatus.toLowerCase().replace("_", " ")} successfully!`
      );
      // After updating, refetch the orders to reflect changes
      fetchOrders();
    } catch (error) {
      toast.error("Failed to update order");
    }
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <div>Please log in to view orders</div>;
  }

  const role = (user?.publicMetadata?.role as string) ?? "SEAFARER"; // Get the role from public metadata

  if (role !== "CAPTAIN" && role !== "STORE_MANAGER") {
    return <div>You are not authorized to view this page.</div>;
  }

  return (
    <div className='p-8'>
      <h1 className='text-2xl font-bold mb-4'>Hello {role}!</h1>
      <h1 className='text-2xl font-bold mb-4'>Orders</h1>
      <div className='grid grid-cols-1 gap-4'>
        {orders.toReversed().map((order) => (
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

            {/* Role-based actions */}
            {role === "CAPTAIN" && order.status === "PENDING" && (
              <div className='mt-4'>
                <button
                  onClick={() =>
                    updateOrderStatus(order.id, "APPROVED_BY_CAPTAIN")
                  }
                  className='bg-blue-500 text-white px-4 py-2 rounded mr-2'
                >
                  Approve
                </button>
                <button
                  onClick={() =>
                    updateOrderStatus(order.id, "DECLINED_BY_CAPTAIN")
                  }
                  className='bg-red-500 text-white px-4 py-2 rounded'
                >
                  Reject
                </button>
              </div>
            )}

            {role === "STORE_MANAGER" &&
              order.status === "APPROVED_BY_CAPTAIN" && (
                <div className='mt-4'>
                  <button
                    onClick={() =>
                      updateOrderStatus(order.id, "CONFIRMED_BY_OFFICE")
                    }
                    className='bg-green-500 text-white px-4 py-2 rounded'
                  >
                    Confirm Delivery
                  </button>
                  <button
                    onClick={() =>
                      updateOrderStatus(order.id, "DECLINED_BY_OFFICE")
                    }
                    className='bg-red-500 text-white px-4 py-2 rounded'
                  >
                    Decline Delivery
                  </button>
                </div>
              )}

            {/* Show current status */}
            <p className='mt-4 text-gray-700'>Status: {order.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
