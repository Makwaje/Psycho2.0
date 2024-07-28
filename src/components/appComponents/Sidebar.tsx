'use client';
import { AiFillMessage } from 'react-icons/ai';
import { BiSolidReport } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { FaHome } from 'react-icons/fa';
import { FaGear, FaHeartCircleCheck } from 'react-icons/fa6';
import { IoMdNotifications } from 'react-icons/io';
import { MdComment } from 'react-icons/md';
import { TbActivityHeartbeat } from 'react-icons/tb';

import Link from 'next/link';
import React from 'react';
import { Separator } from '../ui/chad-cn/separator';
import Headers from '../ui/Headers';
import { cn } from '@/lib/utils';
import useSession from '@/hooks/useSession';
import { SessionTypes } from '@/lib/types';

import { deleteCookie } from 'cookies-next';
import { Button } from '../ui/chad-cn/button';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Sidebar() {
  const session = useSession() as SessionTypes;
  const router = useRouter();

  const logout = async () => {
    const { data } = await axios.get('/api/auth/logout');

    if (data) {
      router.push('/login');
    }
  };

  return (
    <aside className="sticky top-0 flex h-screen w-full flex-col bg-popover px-4 text-popover-foreground">
      <Headers size="xl" className="-ml-2 mb-12 mt-4">
        Psycho
      </Headers>

      <div className="flex h-full flex-col gap-4">
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
        </div>
        <div className=" mt-6 flex flex-col gap-4">
          <NavItem href="/app/settings/password">
            <FaGear size={20} />
            Settings
          </NavItem>

          <NavItem href="/app/notifications">
            <IoMdNotifications size={20} />
            Notifications
          </NavItem>
        </div>
      </div>

      <Button onClick={() => logout()}>logout</Button>

      <NavItem href="/app/settings/profile" className="mb-4 ring-2">
        <CgProfile size={22} />
        {session?.name}
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
