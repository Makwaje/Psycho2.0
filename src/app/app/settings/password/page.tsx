import { Button } from '@/components/ui/chad-cn/button';
import { Input } from '@/components/ui/chad-cn/input';
import Headers from '@/components/ui/Headers';
import Link from 'next/link';
import React from 'react';

export default function PasswordPage() {
  return (
    <div className="mt-16 w-full">
      <Headers>Password Settings</Headers>
      <form className="flex flex-col gap-8">
        <Input
          className=""
          type="password"
          id="currentpassword"
          placeholder="Current Password"
        />

        <Input
          className=""
          type="password"
          id="newpassword"
          placeholder="New Password"
        />
        <Input
          className=""
          type="password"
          id="confirmpassword"
          placeholder="Confirm Password"
        />
        <Button>save changes</Button>
      </form>
    </div>
  );
}
