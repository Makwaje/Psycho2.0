import { Button } from '@/components/ui/chad-cn/button';
import Footer from '@/components/ui/footer';
import Headers from '@/components/ui/Headers';
import VolunteersHeader from '@/components/volunteersComponents/volunteersApplication/volunteersHeader';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCheck } from 'react-icons/fa';
export default function VolunteersApplicationPage() {
  return (
    <div className="h-screen">
      <header>
        <VolunteersHeader />
      </header>

      <main className="mx-10 mt-20 flex flex-col items-center justify-center md:flex-row">
        <div>
          <Headers size={'xxl'}>
            Things to check <br /> before we start
          </Headers>
          <ul className="mt-6 flex flex-col flex-wrap gap-2">
            <li className="relative mt-1 pl-10 text-lg font-bold">
              <FaCheck size={25} className="absolute left-0 top-2" />
              Lorem, ipsum dolor sit amet consectetur dasdasdkas.
            </li>
            <li className="relative mt-1 pl-10 text-lg font-bold">
              <FaCheck size={25} className="absolute left-0 top-2" />
              Lorem, ipsum dolor sit amet consectetur dasdasdkas.
            </li>
            <li className="relative mt-1 pl-10 text-lg font-bold">
              <FaCheck size={25} className="absolute left-0 top-2" />
              Lorem, ipsum dolor sit amet consectetur dasdasdkas.
            </li>
            <li className="relative mt-1 pl-10 text-lg font-bold">
              <FaCheck size={25} className="absolute left-0 top-2" />
              Lorem, ipsum dolor sit amet consectetur dasdasdkas dasdasdka.
            </li>
          </ul>
          <div className="mt-4 flex items-center gap-6">
            <Link href="/volunteers/login">
              <Button className="uppercase transition-all duration-150 hover:bg-primary hover:text-primary-foreground">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
        <Image
          src="/placeholder.png"
          alt="placeholder"
          width={500}
          height={500}
          className="md:w-[60vw]"
        />
      </main>
      <Footer />
    </div>
  );
}
