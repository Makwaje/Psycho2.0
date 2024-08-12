import ChatArea from '@/components/appComponents/chat/ChatArea';
import ChatNav from '@/components/appComponents/chat/ChatNav';
import { Button } from '@/components/ui/chad-cn/button';
import { Textarea } from '@/components/ui/chad-cn/textarea';
import { SendIcon } from 'lucide-react';

function ChatPage() {
  return (
    <div className="relative flex flex-col">
      <ChatNav name="Musab Ibrahim" pfp="/public/User1.png" isActive={true} />
      <ChatArea />
      <ChatBottom />
    </div>
  );
}

export default ChatPage;

function ChatBottom() {
  return (
    <div className="flex h-16 items-center gap-1 bg-background">
      <Textarea className="h-10 min-h-fit resize-none rounded-full" />
      <Button size="icon" className="flex items-center justify-center">
        <span>
          <SendIcon size={22} />
        </span>
      </Button>
    </div>
  );
}
