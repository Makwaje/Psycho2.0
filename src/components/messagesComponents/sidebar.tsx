'use client';

import Link from 'next/link';
import { MoreHorizontal, SquarePen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/chad-cn/button';
import { Avatar, AvatarImage } from '@/components/ui/chad-cn/avatar';
import { Message, userData } from '@/lib/messages-data';
import { useState } from 'react';

interface SidebarProps {
  isCollapsed?: boolean;
  links?: {
    name: string;
    messages: Message[];
    avatar: string;
  }[];
  onClick?: () => void;
  isMobile?: boolean;
}

export function Sidebar({ isMobile = false }: SidebarProps) {
  const [selectedUser, setSelectedUser] = useState(userData[0]);
  const links = userData.map((user) => ({
    name: user.name,
    messages: user.messages ?? [],
    avatar: user.avatar,
    variant: selectedUser.name === user.name ? 'grey' : 'ghost',
  }));

  return (
    <div className="group relative flex h-full flex-col gap-4 p-2">
      {
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center gap-2 text-2xl">
            <p className="font-medium">Chats</p>
            <span className="text-zinc-300">({links.length})</span>
          </div>

          <div>
            <Link
              href="#"
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'icon' }),
                'h-9 w-9'
              )}
            >
              <MoreHorizontal size={20} />
            </Link>

            <Link
              href="#"
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'icon' }),
                'h-9 w-9'
              )}
            >
              <SquarePen size={20} />
            </Link>
          </div>
        </div>
      }
      <div className="grid gap-2 px-2">
        {links.map((link, index) => (
          <Link
            key={index}
            href="/app/messages/100"
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'h-18 justify-start gap-4 ring-1 ring-primary hover:ring-2'
            )}
          >
            <Avatar className="flex items-center justify-center">
              <AvatarImage
                src={link.avatar}
                alt={link.avatar}
                width={6}
                height={6}
                className="h-10 w-10"
              />
            </Avatar>
            <div className="flex max-w-28 flex-col">
              <span>{link.name}</span>
              {link.messages.length > 0 && (
                <span className="truncate text-xs text-muted-foreground">
                  {link.messages[link.messages.length - 1].name.split(' ')[0]}:{' '}
                  {link.messages[link.messages.length - 1].message}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
