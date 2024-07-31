import { FaHome } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import { IoMdNotifications } from 'react-icons/io';
import { MdComment } from 'react-icons/md';

import { HiUserGroup } from 'react-icons/hi2';
import { FaHistory } from 'react-icons/fa';
import Link from 'next/link';
import React from 'react';
import { IoMdLogOut } from 'react-icons/io';
import Headers from '../ui/Headers';
import { cn } from '@/lib/utils';
import Image from 'next/image';

import docImage from '../../../public/file.jpg';
import { VscGitPullRequestNewChanges } from 'react-icons/vsc';

export default function VolunteersSidebar() {
  return (
    <aside className="sticky top-0 flex h-screen w-full flex-col bg-popover px-4 text-popover-foreground">
      <Headers size="xl" className="-ml-2 mb-12 mt-4">
        Psycho
      </Headers>

      <div className="flex h-full flex-col gap-4">
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

        <div className="flex flex-col gap-4">
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
        </div>
        <div className="mt-6 flex flex-col gap-4">
          <NavItem href="/volunteers">
            <FaGear size={20} />
            Settings
          </NavItem>

          <NavItem href="/volunteers">
            <VscGitPullRequestNewChanges size={20} />
            Request
          </NavItem>
        </div>
      </div>

      <NavItem href="/volunteers" className="mb-4 ring-2">
        <IoMdLogOut size={22} />
        logout
      </NavItem>
    </aside>
  );
}

type NavItemProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

function NavItem({ children, href, className }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center justify-start gap-2 rounded-md px-2 py-2 shadow-md ring-1 ring-ring/25 transition-all duration-150 hover:scale-[1.02] hover:bg-primary/80 hover:text-primary-foreground active:scale-100 active:bg-accent-foreground active:shadow-none',
        className
      )}
    >
      {children}
    </Link>
  );
}
