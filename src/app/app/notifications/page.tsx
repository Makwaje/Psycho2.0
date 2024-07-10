import { Button } from '@/src/components/ui/chad-cn/button';
import Link from 'next/link';
import React from 'react';

export default function Notifications() {
  return (
    <div>
      <Link href={'/app/settings/notification'}>
        <Button>Notifications Settings</Button>
      </Link>
    </div>
  );
}
