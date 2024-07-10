'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from '../ui/chad-cn/button';
import { MobileNav } from './LandingPageMobileNavbar';

const navItems = [
  {
    id: 1,
    name: "How it's work?",
    link: '/',
  },
  {
    id: 2,
    name: 'Services',
    link: '/',
  },
  {
    id: 3,
    name: 'FREE',
    link: '/',
  },
  {
    id: 4,
    name: 'FAQ',
    link: '/',
  },
  {
    id: 5,
    name: '  For Volunteers',
    link: '/',
  },
];

function Navbar() {
  return (
    <nav className=" sticky max-w-full top-0 z-50 flex items-center justify-between  p-2 bg-background/80 backdrop-blur-sm lg:p-3  drop-shadow-md  ">
      <div>
        <Link href={'/'} className="text-base font-extrabold">
          PSYCHO
        </Link>
      </div>
      <div
        className={`duration-500 md:static md:min-h-fit min-h-[60vh] left-0 hidden md:block md:w-auto`}
      >
        <ul className="flex font-semibold md:flex-row mx-auto flex-col md:items-center text-xs  gap-2">
          {navItems.map(({ id, link, name }) => (
            <li key={id}>
              <Link
                href={link}
                className=" p-3 hover:bg-accent hover:rounded-md hover:"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className=" flex items-center gap-6">
        <Button
          className="hidden md:block uppercase transition-all duration-150 hover:bg-primary hover:text-primary-foreground"
          variant="outline"
        >
          Get Help Now!
        </Button>
        <MobileNav />
      </div>
    </nav>
  );
}

export default Navbar;
