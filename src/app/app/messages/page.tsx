import { cookies } from 'next/headers';
import React from 'react';

import { ChatLayout } from '@/components/messagesComponents/chat/chat-layout';

export default function Messages() {
  const layout = cookies().get('react-resizable-panels:layout');
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;

  return <ChatLayout defaultLayout={defaultLayout} navCollapsedSize={8} />;
}
