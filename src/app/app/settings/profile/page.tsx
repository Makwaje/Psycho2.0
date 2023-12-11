import Headers from '@/components/ui/Headers'
import { Button } from '@/components/ui/chad-cn/button'
import { Input } from '@/components/ui/chad-cn/input'
import { Label } from '@/components/ui/chad-cn/label'
import Image from 'next/image'
import React from 'react'
import { FaKey } from 'react-icons/fa'

export default function ProfileSettings() {
  return (
    <>
      <div className='mt-24 flex flex-col gap-6'>
        <Headers>Edit your profile</Headers>
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input className='w-[25rem]' type="email" id="fullname" placeholder="Name" />
        </div>
        <div>
          <Label htmlFor="name">Birthday</Label>
          <Input className='w-[25rem]' type="date" id="Birthday" placeholder="birthday" />
        </div>
        <div>
          <Label htmlFor="name">Email Address</Label>
          <Input className='w-[25rem]' type="email" id="email" placeholder="Email" />
        </div>
        <div>
          <Label htmlFor="name">Phone Number</Label>
          <Input className='w-[25rem]' type="number" id="phonenumber" placeholder="Phone Number" />
        </div>
        <div>
       
        </div>
        <Button className='w-[35rem]'>save changes</Button>

      </div>
      <div className='mt-24 flex ml-16 flex-col gap-2'>

        <Image alt='doctor avatar' src="/doctor.jpg" width={300} height={200} />
        <Label htmlFor="picture">Edit avatar</Label>
        <Input id="picture" type="file" />
        <Button variant="destructive">Delete avatar</Button>
      </div>
    </>
  )
}

