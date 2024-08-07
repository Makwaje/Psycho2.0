'use client';
import { Chat } from '@/components/messagesComponents/chat/chat';
import { userData } from '@/lib/messages-data';
import { useState } from 'react';

function ChatPage() {
  const [selectedUser, setSelectedUser] = useState(userData[0]);
  const links = userData.map((user) => ({
    name: user.name,
    messages: user.messages ?? [],
    avatar: user.avatar,
    variant: selectedUser.name === user.name ? 'grey' : 'ghost',
  }));

  return (
    <Chat
      messages={selectedUser.messages}
      selectedUser={selectedUser}
      isMobile={false}
    />
  );
}

export default ChatPage;
