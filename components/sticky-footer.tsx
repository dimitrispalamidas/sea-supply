import { BellRing, Calendar, Home, ShoppingCart, User } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

type StickyFooterProps = {
  className?: string;
};

export const StickyFooter = ({ className }: StickyFooterProps) => {
  return (
    <div className={`fixed bottom-0 w-full bg-white border-t ${className}`}>
      <div className='flex justify-around py-1'>
        <SidebarItem
          label='Home'
          href='/home'
          icon={<Home />}
          className='flex-col text-xs'
        />
        <SidebarItem
          label='Schedule'
          href='/schedule'
          icon={<Calendar />}
          className='flex-col text-xs'
        />
        <div className='pl-2'>
          <SidebarItem
            label='Order'
            href='/order'
            icon={<ShoppingCart />}
            className='flex-col text-xs'
          />
        </div>
        <SidebarItem
          label='Notifications'
          href='/notifications'
          icon={<BellRing />}
          className='flex-col text-xs'
        />
        <SidebarItem
          label='Profile'
          href='/profile'
          icon={<User />}
          className='flex-col text-xs'
        />
      </div>
    </div>
  );
};
