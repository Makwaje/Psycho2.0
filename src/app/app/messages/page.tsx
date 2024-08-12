import Headers from '@/components/ui/Headers';
import React from 'react';

export default function Messages() {
  return (
    <div>
      <nav className="mb-8 border-b-2 border-border">
        <Headers size="lg" className="mb-2">
          Chats
          <span className="text-primary/50"> (4)</span>
        </Headers>
      </nav>

      <div className="mx-auto flex max-w-4xl flex-col">
        <Headers size="lg" className="mb-8">
          Active Chats
          <span className="text-primary/50"> (1)</span>
          <Separator className="mt-2" />
        </Headers>

        <ChatCard
          name="Ismail Ahmed"
          pfp="/public/User1.png"
          time="11:40 AM"
          message="doc help plz"
          isActive={true}
        />

        <Headers size="lg" className="my-8 opacity-70">
          Dead Chats
          <span className="text-primary/50"> (3)</span>
          <Separator className="mt-2" />
        </Headers>
        <ChatCard
          name="Mohamed Bakri"
          pfp="/public/User2.png"
          time="3:04 PM"
          message="doc help plz"
          isActive={false}
        />
        <ChatCard
          name="Musab Ibrahim"
          pfp="/public/User3.png"
          time="11:40 AM"
          message="doc help plz"
          isActive={false}
        />
        <ChatCard
          name="Mawa Bashir"
          pfp="/public/User4.png"
          time="11:40 AM"
          message="😭 شالو لابتوبي"
          isActive={false}
        />
      </div>
    </div>
  );
}

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/chad-cn/avatar';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Separator } from '@/components/ui/chad-cn/separator';

type ChatCardTypes = {
  name: string;
  pfp: string;
  time: string;
  message: string;
  isActive: boolean;
};

function ChatCard({ name, pfp, time, message, isActive }: ChatCardTypes) {
  // get the first letters of the full name
  const splitName = name
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .join('');

  return (
    <Link
      href={'/app/messages/100'}
      className={cn(
        'my-2 flex items-center gap-4 rounded-sm px-2 py-1 opacity-85 ring-1 ring-ring drop-shadow duration-150 hover:scale-[1.015]',
        isActive && 'font-bold opacity-100 ring-2'
      )}
    >
      <Avatar>
        <AvatarImage src={pfp} />
        <AvatarFallback>{splitName}</AvatarFallback>
      </Avatar>
      <div className="flex flex-grow flex-col">
        <span className="font-bold text-primary">{name}</span>
        <span>{message}</span>
      </div>
      <span className="text-muted-foreground">{time}</span>
    </Link>
  );
}
