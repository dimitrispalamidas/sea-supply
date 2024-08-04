import Link from "next/link";
import Image from "next/image";
import { Home, ShoppingCart } from "lucide-react"; // Import necessary icons
import { cn } from "@/lib/utils";
import { SidebarItem } from "./sidebar-item";

type SidebarProps = {
  className?: string;
  handleSheetClose: () => void;
};

export const Sidebar = ({ className, handleSheetClose }: SidebarProps) => {
  return (
    <div
      className={cn(
        "flex h-full md:w-[256px] md:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href='/order'>
        <div className='pt-8 pl-4 pb-7 flex items-center gap-x-3'>
          <Image src='/favicon.png' height={40} width={40} alt='SeaSupply' />
          <h1 className='text-2xl font-extrabold text-sky-400 tracking-wide'>
            SeaSupply
          </h1>
        </div>
      </Link>
      <div className='flex flex-col gap-y-2 flex-1'>
        <SidebarItem
          label='Home'
          href='/home'
          icon={<Home />}
          handleSheetClose={handleSheetClose}
        />
        <SidebarItem
          label='Order'
          href='/order'
          icon={<ShoppingCart />}
          handleSheetClose={handleSheetClose}
        />
      </div>
    </div>
  );
};
