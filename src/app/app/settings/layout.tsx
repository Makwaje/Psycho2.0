import '@/app/globals.css';
import SettingsPage from '@/components/appComponents/settingsPage/SettingsPageNav';
import Headers from '@/components/ui/headers';

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
    <div>
      <Headers size="lg">Account settings</Headers>
      <div className="flex gap-x-4">
        {/* <SettingsPage /> */}
        {children}
      </div>
    </div>
  );
}
