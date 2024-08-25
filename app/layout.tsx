import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";

// import { OrderProvider } from "@/context/OrderContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SeaSupply",
  description: "Order and manage supplies for maritime crews.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        {/* <OrderProvider> */}
        <body className={inter.className}>{children}</body>
        {/* </OrderProvider> */}
      </html>
    </ClerkProvider>
  );
}
