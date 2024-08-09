"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  icon: React.ReactNode;
  href: string;
  handleSheetClose?: () => void;
  className?: string;
  buttonClassName?: string;
};

export const SidebarItem = ({
  label,
  icon,
  href,
  handleSheetClose,
  className,
  buttonClassName,
}: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const handleClick = () => {
    if (handleSheetClose) {
      handleSheetClose();
    }
  };

  return (
    <Link href={href} passHref>
      <Button
        variant={isActive ? "default" : "sidebar"}
        className={cn(
          "justify-start h-[52px] w-full flex items-center",
          className
        )}
        onClick={handleClick}
        size='sm'
      >
        {icon}
        <span className={buttonClassName}>{label}</span>
      </Button>
    </Link>
  );
};
