import "@/app/globals.css";
import SettingsPage from "@/components/Pages/Dashboard/SettingsPage";
import Sidebar from "@/components/Pages/Dashboard/Sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Psycho - الله معاك",
  description: "i hope you die soon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <main className="flex w-full">
          <Sidebar />
          <SettingsPage/>
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}