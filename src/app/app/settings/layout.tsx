// import "@/app/globals.css";
import SettingsPage from '@/components/appComponents/settingsPage/SettingsPage';
import Headers from '@/components/ui/Headers';

import type { Metadata } from 'next';
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Psycho - الله معاك',
  description: 'i hope you die soon',
};

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex flex-col w-[25vw]" >
        <Headers size="xl">Account settings</Headers>
        <SettingsPage />
      </div>
      {children}
    </div>
  );
}
