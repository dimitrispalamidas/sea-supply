import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";
import { StickyFooter } from "@/components/sticky-footer";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      {/* <MobileHeader /> */}
      <Sidebar className='hidden md:flex' />
      <main className='md:pl-[256px] h-full'>
        <div className='max-w-[1056px] mx-auto pt-6 h-full'>{children}</div>
      </main>
      <StickyFooter className='md:hidden' />
    </>
  );
};

export default MainLayout;
