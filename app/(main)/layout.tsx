import { Sidebar } from "@/components/sidebar";
import { StickyFooter } from "@/components/sticky-footer";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className='relative min-h-screen'>
      <div
        className='absolute inset-0 bg-center bg-cover z-0'
        style={{
          backgroundImage: "url('/background-image.jpg')",
          filter: "blur(5px)",
          WebkitFilter: "blur(5px)",
        }}
      />
      <div className='relative z-10 bg-opacity-90'>
        <Sidebar className='hidden md:flex' />
        <main className='md:pl-[256px] mx-auto max-w-7xl px-4'>{children}</main>
        <StickyFooter className='md:hidden' />
      </div>
    </div>
  );
};

export default MainLayout;
