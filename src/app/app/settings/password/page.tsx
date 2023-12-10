
import Headers from '@/components/ui/Headers'
import { Button } from '@/components/ui/chad-cn/button'
import { Input } from '@/components/ui/input'
import { Separator } from "@/components/ui/chad-cn/separator";

import Link from 'next/link'
import React from 'react'

export default function PasswordPage() {
  return (
    <div className='mt-24 flex flex-col gap-8'>
      <Headers>Password Settings</Headers>
      <Input className='w-[75rem]' type="password" id='currentpassword' placeholder="Current Password" />

      <Input className='w-[75rem]' type="password" id='newpassword' placeholder="New Password" />
      <Input className='w-[75rem]' type="password" id='confirmpassword' placeholder="Confirm Password" />
      <Button className='w-[75rem]'>save changes</Button>

    </div>
  )
}
