import { VolunteersMobileSidebar } from '@/components/volunteersComponents/VolunteersMobileSidebar';
import VolunteersSidebar from '@/components/volunteersComponents/VolunteersSidebar';

import type { Metadata } from 'next';
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Psycho - volunteers',
  description: 'volunteers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="md:flex w-full">
      <div className="md:block hidden">
        <VolunteersSidebar />
      </div>
      <VolunteersMobileSidebar />
      <div className="flex-1 px-6 pt-6 w-full">
        {children}

        {/* Add footer */}
      </div>
    </main>
  );
}
