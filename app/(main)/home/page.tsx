"use client";

import { NewsCarousel, useNews } from "./components/news-carousel";
import SignInForm from "./components/SignInForm";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { createOrSyncUser } from "@/lib/syncUser"; // Import your user sync function

const HomePage = () => {
  const { news } = useNews();
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    // Sync user data if the user is signed in
    const syncUser = async () => {
      if (isSignedIn && user) {
        try {
          await createOrSyncUser();
        } catch (error) {
          console.error("Error syncing user:", error);
        }
      }
    };
    syncUser();
  }, [isSignedIn, user]);

  // if (!isSignedIn) {
  //   return <SignInForm />;
  // }

  return (
    <div className='min-h-screen mb-14'>
      <header className='text-gray-500 p-4'>
        <h1 className='text-3xl font-bold'>Welcome, {user?.firstName}!</h1>
      </header>
      <section className='p-6 grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <div className='bg-white p-4 shadow rounded'>
          <h2 className='text-xl font-semibold'>Order Status</h2>
          <p className='text-gray-700'>
            Current orders, pending approvals, recent deliveries...
          </p>
        </div>
        <div className='bg-white p-4 shadow rounded'>
          <h2 className='text-xl font-semibold'>Profile Overview</h2>
          <p className='text-gray-700'>Summary of your profile...</p>
        </div>
      </section>
      <section className='p-6'>
        <div className='bg-white p-4 shadow rounded mb-6'>
          <h2 className='text-xl font-semibold'>Global News</h2>
          <NewsCarousel articles={news} />
        </div>
        <div className='bg-white p-4 shadow rounded'>
          <h2 className='text-xl font-semibold'>Weather Updates</h2>
          <p className='text-gray-700'>Real-time weather conditions...</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
