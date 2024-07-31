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
import { CgProfile } from 'react-icons/cg';
import { FaGear, FaHeartCircleCheck } from 'react-icons/fa6';
import { IoMdNotifications } from 'react-icons/io';
import { Separator } from '../ui/chad-cn/separator';
import { AiFillMessage } from 'react-icons/ai';
import { MdComment } from 'react-icons/md';
import { BiSolidReport } from 'react-icons/bi';
import { TbActivityHeartbeat } from 'react-icons/tb';
import { FaHome } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { TiThMenu } from 'react-icons/ti';

export function AppMobileSideBar() {
  return (
    <nav className="sticky top-0 z-50 flex max-w-full items-center justify-between bg-background/80 p-2 drop-shadow-md backdrop-blur-sm md:hidden lg:p-3">
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <button
            title="menu"
            className="rounded-md border border-input bg-background p-1 ring-1 ring-ring/20 hover:bg-accent hover:text-accent-foreground"
          >
            <TiThMenu />
          </button>
        </SheetTrigger>
        <SheetContent side={'left'}>
          <SheetHeader>
            <SheetTitle className="font-bold">PSYCHO</SheetTitle>
            {/* Add Description later */}
            {/* <SheetDescription></SheetDescription> */}
          </SheetHeader>

          <div className="flex h-full flex-col">
            <div className="flex flex-col gap-4">
              <NavItem href="/app/home">
                <FaHome size={20} /> Home
              </NavItem>
              <NavItem href="/app/doctors">
                <FaHeartCircleCheck size={20} /> Doctors
              </NavItem>
              <NavItem href="/app/activities">
                <TbActivityHeartbeat size={20} />
                Activities
              </NavItem>
              <NavItem href="/app/reports">
                <BiSolidReport size={20} />
                Reports
              </NavItem>
              <NavItem href="/app/blog">
                <MdComment size={20} />
                Blog
              </NavItem>
              <NavItem href="/app/messages">
                <AiFillMessage size={20} />
                Messages
              </NavItem>
              <div className="mt-[10%] flex flex-col gap-4">
                <NavItem
                  href="/app/settings/password
                "
                >
                  <FaGear size={20} />
                  Settings
                </NavItem>
                <NavItem href="/app/notifications">
                  <IoMdNotifications size={20} />
                  Notifications
                </NavItem>
              </div>
              <NavItem href="/app/settings/profile" className="ring-2">
                <CgProfile size={22} />
                Mohamed Alfadel
              </NavItem>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <div>
        <Link href={'/'} className="text-lg font-extrabold">
          PSYCHO
        </Link>
      </div>
    </nav>
  );
}

function NavItem({ children, href, className }: any) {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center justify-start gap-2 rounded-md px-2 py-3 shadow-md ring-1 ring-ring/25 transition-all duration-150 hover:scale-[1.02] hover:bg-primary/80 hover:text-primary-foreground active:scale-100 active:bg-accent-foreground active:shadow-none',
        className
      )}
    >
      {children}
    </Link>
  );
}
