'use client';

import Link from 'next/link';
import { Button } from '../../ui/chad-cn/button';
import { MobileNav } from '../../LandingPage/LandingPageMobileNavbar';

function VolunteersHeader() {
  return (
    <nav className="sticky top-0 z-50 flex max-w-full items-center justify-between bg-background/80 p-2 drop-shadow-md backdrop-blur-sm lg:p-3">
      <div>
        <Link href={'/'} className="text-base font-extrabold">
          PSYCHO
        </Link>
      </div>
    </nav>
  );
}

export default VolunteersHeader;
