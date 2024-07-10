import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { PlusSquare } from "lucide-react";
import Headers from "@components/ui/Headers";
import { Button } from "@components/ui/chad-cn/button";
import { Separator } from "@components/ui/chad-cn/separator";

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
      <nav>
        <div className="flex items-center justify-between">
          <Headers size="xl" className="font-bold">
            Blog
          </Headers>
          <Button>
            Create Post
            <span>
              <PlusSquare className="ml-2" />
            </span>
          </Button>
        </div>
        <Separator className="my-4" />
      </nav>

      <div>{children}</div>
    </>
  );
}
