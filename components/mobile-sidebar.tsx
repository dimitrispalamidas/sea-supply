"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";
import { useState } from "react";

export const MobileSidebar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleSheetOpen = () => {
    setIsSheetOpen(true);
  };

  const handleSheetClose = () => {
    setIsSheetOpen(false);
  };

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <Menu className='text-white' onClick={handleSheetOpen} />
      </SheetTrigger>
      <SheetContent className='p-0 z-[100]' side='left'>
        <Sidebar handleSheetClose={handleSheetClose} />
      </SheetContent>
    </Sheet>
  );
};
