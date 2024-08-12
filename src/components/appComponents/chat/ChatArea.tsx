import { ScrollArea } from '@/components/ui/chad-cn/scroll-area';
import MessageBox from './MessageBox';

export default function ChatArea() {
  return (
    <ScrollArea className="m-0 flex h-[73dvh] w-full flex-grow rounded-md border-2 p-2 sm:p-4 md:h-[82dvh]">
      <MessageBox
        message={'test test test '}
        time="11:40AM"
        pfp={'/public/User1.png'}
        user={false}
      />
      <MessageBox
        message={'hello mom'}
        time="11:40AM"
        pfp={'/public/User1.png'}
        user={false}
      />
      <MessageBox
        message={'❤️'}
        time="11:40AM"
        pfp={'/public/User1.png'}
        user={false}
      />
      <MessageBox
        message={'❤️'}
        time="11:40AM"
        pfp={'/public/User1.png'}
        user={false}
      />
      <MessageBox
        message={'❤️'}
        time="11:40AM"
        pfp={'/public/User1.png'}
        user={false}
      />
      <MessageBox
        message={'❤️'}
        time="11:40AM"
        pfp={'/public/User1.png'}
        user={false}
      />
      <MessageBox
        message={'❤️'}
        time="11:40AM"
        pfp={'/public/User1.png'}
        user={false}
      />
      <MessageBox
        message={
          'Objects in the rear-view mirror, are closer that they appear '
        }
        time="11:40AM"
        pfp={'/public/User1.png'}
        user={false}
      />
      <MessageBox
        message={'except for you my dear'}
        time="11:40AM"
        pfp={'/public/User1.png'}
        user={true}
      />
      <MessageBox
        message={'die'}
        time="11:40AM"
        pfp={'/public/User1.png'}
        user={false}
      />
      <MessageBox
        message={'twice'}
        time="11:40AM"
        pfp={'/public/User1.png'}
        user={false}
      />
      <MessageBox
        message={'ok'}
        time="11:40AM"
        pfp={'/public/User1.png'}
        user={true}
      />
    </ScrollArea>
  );
}
