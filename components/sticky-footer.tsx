import {
  ChevronsRightLeftIcon,
  CloudSun,
  Files,
  Home,
  Newspaper,
  PowerOffIcon,
  ShoppingCart,
  User,
} from "lucide-react";
import { SidebarItem } from "./sidebar-item"; // Reuse SidebarItem component

type StickyFooterProps = {
  className?: string;
};

export const StickyFooter = ({ className }: StickyFooterProps) => {
  return (
    <div className={`fixed bottom-0 w-full bg-white border-t ${className}`}>
      <div className='flex justify-around py-2'>
        <SidebarItem label='Home' href='/home' icon={<Home />} />
        <SidebarItem label='News' href='/home' icon={<Newspaper />} />
        <div className='pl-5'>
          <SidebarItem label='Order' href='/order' icon={<ShoppingCart />} />
        </div>
        <SidebarItem label='Weather' href='/home' icon={<CloudSun />} />
        <SidebarItem label='Profile' href='/home' icon={<User />} />
      </div>
    </div>
  );
};
