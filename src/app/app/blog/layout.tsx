import "@/app/globals.css";
import Sidebar from "@/components/Pages/Dashboard/Sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Tooltip from "../../../components/Pages/Dashboard/blogPage/Tooltip";
import Headers from "@/components/ui/Headers";

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
    <>
      <Headers size="xl" className="font-bold">
        Blog
      </Headers>
      <Tooltip />

      <div>{children}</div>
    </>
  );
}
