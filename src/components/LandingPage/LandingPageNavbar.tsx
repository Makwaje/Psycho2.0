'use client';

import Link from 'next/link';
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
    name: 'For Volunteers',
    link: '/volunteers-signup',
  },
];

function Navbar() {
  return (
    <nav className=" sticky top-0 z-50 flex max-w-full items-center justify-between  bg-background/80 p-2 drop-shadow-md backdrop-blur-sm  lg:p-3  ">
      <div>
        <Link href={'/'} className="text-base font-extrabold">
          PSYCHO
        </Link>
      </div>
      <div
        className={`left-0 hidden min-h-[60vh] duration-500 md:static md:block md:min-h-fit md:w-auto`}
      >
        <ul className="mx-auto flex flex-col gap-2 text-xs font-semibold md:flex-row  md:items-center">
          {navItems.map(({ id, link, name }) => (
            <li key={id}>
              <Link
                href={link}
                className=" hover: p-3 hover:rounded-md hover:bg-accent"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className=" flex items-center gap-6">
        <Link href="/login">
          <Button
            className="hidden uppercase transition-all duration-150 hover:bg-primary hover:text-primary-foreground md:block"
            variant="outline"
          >
            Get Help Now!
          </Button>
        </Link>
        <MobileNav />
      </div>
    </nav>
  );
}

export default Navbar;
