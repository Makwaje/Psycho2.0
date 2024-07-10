import Sidebar from '@/src/components/appComponents/Sidebar';
import { MobileNav } from '@/src/components/LandingPage/LandingPageMobileNavbar';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Psycho - الله معاك',
  description: 'i hope you die soon',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="md:flex w-full">
      <div className=" hidden md:block">
        <Sidebar />
      </div>
      <MobileNav />
      <div className="w-full flex-1 px-6 pt-6">
        {children}

        {/* Add footer */}
      </div>
    </main>
  );
}
