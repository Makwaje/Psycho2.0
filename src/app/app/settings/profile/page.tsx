import Headers from '@/components/ui/headers';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import React from 'react';
import { FaKey } from 'react-icons/fa';

export default function ProfileSettings() {
  return (
    <form className="md:flex md:gap-8 m-auto mb-8 w-full">
      <div className="flex md:order-last items-center justify-center flex-col gap-2">
        <Image alt="doctor avatar" src="/doctor.jpg" width={300} height={200} />
        <Label htmlFor="picture">Edit avatar</Label>
        <Input id="picture" type="file" />
        <Button variant="destructive" className="w-full">
          Delete avatar
        </Button>
      </div>

      <div className="mt-16 flex flex-col w-full gap-6">
        <Headers>Edit your profile</Headers>
        <div className="flex flex-col gap-4 ">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input className="" type="email" id="fullname" placeholder="Name" />
          </div>
          <div>
            <Label htmlFor="name">Birthday</Label>
            <Input
              className=""
              type="date"
              id="Birthday"
              placeholder="birthday"
            />
          </div>
          <div>
            <Label htmlFor="name">Email Address</Label>
            <Input className="" type="email" id="email" placeholder="Email" />
          </div>
          <div>
            <Label htmlFor="name">Phone Number</Label>
            <Input
              className=""
              type="number"
              id="phonenumber"
              placeholder="Phone Number"
            />
          </div>
        </div>

        <Button>save changes</Button>
      </div>
    </form>
  );
}
