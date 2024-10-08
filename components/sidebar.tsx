"use client";

import Link from "next/link";
import Image from "next/image";
import {
  BellRing,
  Calendar,
  Home,
  LucideShoppingCart,
  ShoppingCart,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SidebarItem } from "./sidebar-item";
import {
  ClerkLoaded,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser, // Import useUser correctly
} from "@clerk/nextjs"; // Correct import from Clerk
import { Button } from "./ui/button";

type SidebarProps = {
  className?: string;
  handleSheetClose?: () => void;
};

export const Sidebar = ({ className, handleSheetClose }: SidebarProps) => {
  const { user } = useUser(); // useUser hook only returns user, no need for isSignedIn

  return (
    <div
      className={cn(
        "flex h-full md:w-[220px] md:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href='/home'>
        <div className='pt-8 pl-2 pb-7 flex items-center gap-x-3'>
          <Image src='/favicon.png' height={40} width={40} alt='SeaSupply' />
          <h1 className='text-2xl font-extrabold text-gray-900 tracking-wide'>
            SeaSupply
          </h1>
        </div>
      </Link>
      <div className='flex flex-col gap-y-2 flex-1'>
        <SidebarItem
          label='Order'
          href='/order'
          icon={<ShoppingCart />}
          className='flex-row'
          buttonClassName='pl-2'
        />
        <SidebarItem
          label='Calendar'
          href='/calendar'
          icon={<Calendar />}
          className='flex-row'
          buttonClassName='pl-2'
        />
        <SidebarItem
          label='Notifications'
          href='/notifications'
          icon={<BellRing />}
          className='flex-row'
          buttonClassName='pl-2'
        />
        <SidebarItem
          label='Profile'
          href='/profile'
          icon={<User />}
          className='flex-row'
          buttonClassName='pl-2'
        />
        <SidebarItem
          label='Manage Orders'
          href='/orders'
          icon={<LucideShoppingCart />}
          className='flex-row'
          buttonClassName='pl-2'
        />
      </div>
      <ClerkLoaded>
        <SignedIn>
          <div className='flex items-center pl-2 mb-10 mt-5'>
            <UserButton afterSignOutUrl='/' />
            <span className='ml-2'>{user?.fullName} </span>
          </div>
        </SignedIn>
        <SignedOut>
          <div className='pl-2 mb-10 mt-5'>
            <SignInButton>
              <Button>Sign In</Button>
            </SignInButton>
          </div>
        </SignedOut>
      </ClerkLoaded>
    </div>
  );
};
