import { Button } from '../ui/chad-cn/button';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/chad-cn/sheet';
import Link from 'next/link';

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

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent side={'right'}>
        <SheetHeader>
          <SheetTitle>PSYCHO</SheetTitle>
          {/* Add Description later */}
          {/* <SheetDescription></SheetDescription> */}
        </SheetHeader>

        <ul className="flex flex-col mt-6 font-bold text-lg  gap-8 justify-center">
          {navItems.map(({ id, link, name }) => (
            <li
              key={id}
              className=" p-3 cursor-pointer hover:bg-accent hover:rounded-md"
            >
              <Link href={link}>{name}</Link>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button
            className="uppercase transition-all duration-150 hover:bg-primary hover:text-primary-foreground
            w-full
            "
            variant="outline"
          >
            Get Help Now!
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
