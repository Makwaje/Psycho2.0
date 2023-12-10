import "@/app/globals.css";
import SettingsPage from "@/components/Pages/Dashboard/SettingsPage";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Psycho - الله معاك",
  description: "i hope you die soon",
};

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <div className="flex gap-2">
          <SettingsPage/>
            
             {children}
        </div>
  
  );
}
