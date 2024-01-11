import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Headers from "@/components/ui/Headers";
import { Separator } from "@/components/ui/chad-cn/separator";

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
      <Separator className="my-4" />

      <div>{children}</div>
    </>
  );
}
