import { Button } from "../ui/chad-cn/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/chad-cn/sheet";
import Link from "next/link";

const navItems = [
  {
    id: 1,
    name: "How it's work?",
    link: "/",
  },
  {
    id: 2,
    name: "Services",
    link: "/",
  },
  {
    id: 3,
    name: "FREE",
    link: "/",
  },
  {
    id: 4,
    name: "FAQ",
    link: "/",
  },
  {
    id: 5,
    name: "  For Volunteers",
    link: "/",
  },
];

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent side={"right"}>
        <SheetHeader>
          <SheetTitle>PSYCHO</SheetTitle>
          {/* Add Description later */}
          {/* <SheetDescription></SheetDescription> */}
        </SheetHeader>

        <ul className="mt-6 flex flex-col justify-center gap-8  text-lg font-bold">
          {navItems.map(({ id, link, name }) => (
            <li
              key={id}
              className=" cursor-pointer p-3 hover:rounded-md hover:bg-accent"
            >
              <Link href={link}>{name}</Link>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Link href="/login">
            <Button
              className="w-full uppercase transition-all duration-150 hover:bg-primary
            hover:text-primary-foreground
            "
              variant="outline"
            >
              Get Help Now!
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
