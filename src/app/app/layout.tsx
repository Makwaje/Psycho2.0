import "@/app/globals.css";
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
    <main className="flex w-full">
      <Sidebar />
      <section className="w-full flex-1 px-6 pt-6">{children}</section>
    </main>
  );
}
