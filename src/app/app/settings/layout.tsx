import "@/app/globals.css";
import SettingsPage from "@/components/Pages/Dashboard/SettingsPage";
import Sidebar from "@/components/Pages/Dashboard/Sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Settingpage from "./page";

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
    <div className="grid grid-cols-3">
          <Settingpage/>
             {children}
        </div>
  
  
  );
}