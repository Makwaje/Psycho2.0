import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/chad-cn/avatar';
import { cn } from '@/lib/utils';
type MessageBoxProps = {
  message: string;
  pfp: string;
  time: string;
  user: boolean;
};

export default function MessageBox({
  message,
  pfp,
  time,
  user,
}: MessageBoxProps) {
  return (
    <div
      className={cn('my-4 flex items-center gap-2', user && 'flex-row-reverse')}
    >
      <Avatar>
        <AvatarImage src={pfp} />
        <AvatarFallback>MI</AvatarFallback>
      </Avatar>
      <div
        className={cn(
          'w-fit items-center rounded-lg border bg-accent p-4',
          user && 'bg-primary/25'
        )}
      >
        <p className="max-w-80 text-sm text-accent-foreground sm:max-w-sm md:text-lg lg:max-w-xl">
          {message}
        </p>
      </div>
      <span className="text-xs text-muted-foreground/70">{time}</span>
    </div>
  );
}
