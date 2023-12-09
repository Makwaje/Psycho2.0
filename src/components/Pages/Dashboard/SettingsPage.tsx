import Headers from '@/components/ui/Headers'
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { CgProfile } from "react-icons/cg";
import { IoMdNotifications } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
export default function SettingsPage() {
  return (
  <>
    <Headers size='xl'>Account settings</Headers>
    <div className='mt-16 grid gap-1 grid-cols-3'>
     <div className='flex w-72  flex-col gap-4'>
      <NavItem href="#" className='grid grid-cols-2 items-center'>
        <div className='flex items-center gap-2'>
            <CgProfile size={20} />
             Profile
        </div>
            <div className=" justify-self-end">&rarr;</div>
      </NavItem>

      <NavItem href="#" className='grid grid-cols-2 items-center'>
        <div className='flex items-center gap-2'>
            <IoMdNotifications size={20} /> Notification
        </div>
            <div className=" justify-self-end">&rarr;</div>
      </NavItem>

      <NavItem href="#" className='grid grid-cols-2 items-center'>
        <div className='flex items-center gap-2'>
            <RiLockPasswordFill size={20} /> Password
        </div>
            <div className=" justify-self-end">&rarr;</div>
      </NavItem>
     </div>
    </div>
  </>
  )
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
        " px-2 py-3 gap-2 rounded-md  shadow-md ring-1 ring-ring/25 transition-all duration-150 hover:scale-[1.02] hover:bg-primary/80 hover:text-primary-foreground active:scale-100 active:bg-accent-foreground active:shadow-none ",
        className,
      )}
    >
      {children}
    </Link>
  );
}