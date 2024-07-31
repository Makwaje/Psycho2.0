import type { Metadata } from 'next';
// import { Inter } from "next/font/google";
import Image from 'next/image';

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Psycho - الله معاك',
  description: 'i hope you die soon',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen w-screen">
      <div className="flex h-[100dvh]">
        <div className="hidden w-2/3 bg-destructive md:block">
          <Image
            width={0}
            height={0}
            className="hidden h-screen w-full object-cover md:block"
            src="AssetLogin.svg"
            alt="hi mom"
            loading="eager"
          />
        </div>
        {children}
      </div>
    </main>
  );
}
