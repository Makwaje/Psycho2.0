'use client';

import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/chad-cn/button';
import { Input } from '@/components/ui/chad-cn/input';
import { Label } from '@/components/ui/chad-cn/label';
import Headers from '@/components/ui/Headers';
import { profileSchema, TProfileSchema } from '@/lib/types';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import React from 'react';

export default function ProfileSettings() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TProfileSchema>({
    resolver: zodResolver(profileSchema),
  });

  function onSubmit(data: TProfileSchema) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="md:flex md:gap-8 m-auto mb-8 w-full"
    >
      {/* IMAGE  */}
      <div className="flex md:order-last items-center justify-center flex-col gap-2">
        <Image alt="doctor avatar" src="/doctor.jpg" width={300} height={200} />
        <Label htmlFor="picture">Edit avatar</Label>
        <Input {...register('photo')} id="photo" type="file" />
        <Button variant="destructive" className="w-full">
          Delete avatar
        </Button>
      </div>

      <div className="mt-16 flex flex-col w-full gap-6">
        <Headers>Edit your profile</Headers>
        <div className="flex flex-col gap-4 ">
          {/* USER NAME */}

          <div>
            <Label>Full Name</Label>
            <Input
              {...register('name')}
              type="text"
              id="name"
              placeholder="Name"
            />
          </div>

          {/* BIRTHDAY */}

          <div>
            <Label>Birthday</Label>
            <Input
              {...register('birthday')}
              type="date"
              id="birthday"
              placeholder="birthday"
            />
          </div>

          {/* EMAIL ADDRESS */}

          <div>
            <Label>Email Address</Label>
            <Input
              {...register('email')}
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
        </div>
        <Button disabled={isSubmitting} type="submit">
          save changes
        </Button>
      </div>
    </form>
  );
}
