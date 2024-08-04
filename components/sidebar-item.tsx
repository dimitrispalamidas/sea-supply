"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  label: string;
  icon: React.ReactNode;
  href: string;
};

export const SidebarItem = ({ label, icon, href }: Props) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Button
      variant={active ? "sidebarOutline" : "sidebar"}
      className='justify-start h-[52px]'
    >
      <Link href={href} className='flex items-center'>
        <div className='mr-5'>{icon}</div>
        {label}
      </Link>
    </Button>
  );
};
