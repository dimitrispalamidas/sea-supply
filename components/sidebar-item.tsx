"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  label: string;
  icon: React.ReactNode;
  href: string;
  handleSheetClose?: () => void; // Make handleSheetClose optional
};

export const SidebarItem = ({ label, icon, href, handleSheetClose }: Props) => {
  const pathname = usePathname();
  const active = pathname === href;

  const handleClick = () => {
    if (handleSheetClose) {
      handleSheetClose();
    }
  };

  return (
    <Link href={href} passHref>
      <Button
        variant={active ? "sidebarOutline" : "sidebar"}
        className='justify-start h-[52px] w-full flex items-center'
        onClick={handleClick}
      >
        <div className='mr-5'>{icon}</div>
        {label}
      </Button>
    </Link>
  );
};
