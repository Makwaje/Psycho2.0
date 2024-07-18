import { Button } from '../ui/chad-cn/button';
import docImage from '../../../public/file.jpg';
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
import { VscGitPullRequestNewChanges } from 'react-icons/vsc';
import { FaGear } from 'react-icons/fa6';
import { IoMdLogOut, IoMdNotifications } from 'react-icons/io';
import { MdComment } from 'react-icons/md';
import { FaHistory, FaHome } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { HiUserGroup } from 'react-icons/hi2';
import { TiThMenu } from 'react-icons/ti';

export function VolunteersMobileSidebar() {
  return (
    <nav className="sticky top-0 z-50 flex max-w-full items-center justify-between bg-background/80 p-2 drop-shadow-md backdrop-blur-sm md:hidden lg:p-3">
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <button
            title="menu"
            className="border border-input bg-background p-1 ring-1 ring-ring/20 hover:bg-accent hover:text-accent-foreground"
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
              <NavItem
                href="/volunteers"
                className="flex items-center justify-start gap-2 rounded-md px-2 py-2 shadow-md ring-1 ring-ring/25 transition-all duration-150 hover:scale-[1.02] hover:bg-primary/80 hover:text-primary-foreground active:scale-100 active:bg-accent-foreground active:shadow-none"
              >
                <Image
                  className="rounded-full"
                  src={docImage}
                  alt="doc"
                  width={40}
                  height={10}
                />
                <div>
                  <p className="font-semibold">lorem</p>
                  <p className="font-bold">Musab Softare</p>
                </div>
              </NavItem>
              <NavItem href="/volunteers">
                <FaHome size={20} /> Home
              </NavItem>

              <NavItem href="/volunteers/patients">
                <HiUserGroup size={20} />
                Patients
              </NavItem>

              <NavItem href="/volunteers/messages">
                <MdComment size={20} />
                Messages
              </NavItem>

              <NavItem href="/volunteers">
                <FaHistory size={20} />
                history
              </NavItem>
              <div className="mt-[20%] flex flex-col gap-4">
                <NavItem
                  href="/volunteers
                "
                >
                  <FaGear size={20} />
                  Settings
                </NavItem>
                <NavItem href="/volunteers">
                  <VscGitPullRequestNewChanges size={20} />
                  Request
                </NavItem>
              </div>
              <NavItem href="/volunteers" className="ring-2">
                <IoMdLogOut size={22} />
                logout
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
