import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/chad-cn/avatar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/chad-cn/popover';
import { Separator } from '@/components/ui/chad-cn/separator';
import { ChevronDownIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/chad-cn/button';
import { CirclePowerIcon, VerifiedIcon } from 'lucide-react';

type ChatNavTypes = {
  name: string;
  pfp: string;
  isActive: boolean;
};

export default function ChatNav({ name, pfp, isActive }: ChatNavTypes) {
  // get the first letters of the full name
  const splitName = name
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .join('');

  return (
    <>
      <nav className="z-10 my-2 flex items-center gap-4 rounded-sm bg-background px-2 py-2 shadow-md ring-1 ring-ring">
        <Avatar>
          <AvatarImage src={pfp} />
          <AvatarFallback>{splitName}</AvatarFallback>
        </Avatar>
        <div className="flex flex-grow flex-col">
          <span className="flex font-bold text-primary">
            Dr. {name}
            <span>
              <VerifiedIcon stroke="white" fill="black" size={20} />
            </span>
          </span>
        </div>

        <div>
          <Popover>
            <PopoverTrigger>
              <ChevronDownIcon className="scale-[1.7]" />
            </PopoverTrigger>
            <PopoverContent className="flex max-w-44 flex-col gap-4">
              <Button variant="destructive" size="sm">
                <CirclePowerIcon className="mr-1.5" size={24} />
                <span>End Session</span>
              </Button>
            </PopoverContent>
          </Popover>
        </div>
      </nav>
      <Separator />
    </>
  );
}
