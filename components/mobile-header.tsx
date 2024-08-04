import { MobileSidebar } from "./mobile-sidebar";

export const MobileHeader = () => {
  return (
    <nav className='md:hidden px-6 h-[50px] flex items-center bg-sky-500 border-b fixed top-0 w-full z-50'>
      <MobileSidebar />
    </nav>
  );
};
