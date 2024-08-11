import Link from "next/link";
import Image from "next/image";
import { BellRing, Calendar, Home, ShoppingCart, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { SidebarItem } from "./sidebar-item";
import {
  ClerkLoaded,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";

type SidebarProps = {
  className?: string;
  handleSheetClose?: () => void;
};

export const Sidebar = ({ className, handleSheetClose }: SidebarProps) => {
  return (
    <div
      className={cn(
        "flex h-full md:w-[220px] md:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href='/order'>
        <div className='pt-8 pl-2 pb-7 flex items-center gap-x-3'>
          <Image src='/favicon.png' height={40} width={40} alt='SeaSupply' />
          <h1 className='text-2xl font-extrabold text-gray-900 tracking-wide'>
            SeaSupply
          </h1>
        </div>
      </Link>
      <div className='flex flex-col gap-y-2 flex-1'>
        <SidebarItem
          label='Home'
          href='/home'
          icon={<Home />}
          className='flex-row'
          buttonClassName='pl-2'
        />
        <SidebarItem
          label='Schedule'
          href='/schedule'
          icon={<Calendar />}
          className='flex-row'
          buttonClassName='pl-2'
        />
        <SidebarItem
          label='Order'
          href='/order'
          icon={<ShoppingCart />}
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
      </div>
      <ClerkLoaded>
        <SignedIn>
          <div className='flex items-center pl-2 mb-10'>
            <UserButton afterSignOutUrl='/' />
            <span className='ml-2'> User </span>
          </div>
        </SignedIn>
      </ClerkLoaded>
    </div>
  );
};
