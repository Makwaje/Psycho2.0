'use client';

import { useForm } from 'react-hook-form';

import Headers from '@/components/ui/Headers';
import { Button } from '@/components/ui/chad-cn/button';
import { Input } from '@/components/ui/chad-cn/input';
import { Separator } from '@/components/ui/chad-cn/separator';
import { TResetPasswordSchema, resetPasswordSchema } from '@/lib/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';
import axios from 'axios';

export default function ResetPage({ params }: { params: Params }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
  });

  async function onSubmit(formData: { password: string }) {
    console.log(formData.password);

    const data = await axios.post(
      `${'http://localhost:8085/api/v1'}/users/reset-password/${params.id}`,
      { password: formData.password }
    );

    console.log(data);
  }

  return (
    <div className="relative flex w-full flex-col items-center justify-center md:w-1/2">
      <Link
        className="absolute left-6 top-4 bg-accent-foreground p-4 text-2xl text-accent md:text-4xl"
        href="/"
      >
        <Headers size="sm">Psycho</Headers>
      </Link>
      <div className="flex w-80 flex-col justify-between text-center">
        <Headers size="xl" className="mx-auto mb-20 text-3xl md:text-4xl">
          Reset Password
        </Headers>
        <p className="mb-12 font-medium ">
          Please fill the required fields below, so we can set your new password
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-80 flex-col items-center justify-center gap-4">
          {/* Password */}
          <div className="w-full space-y-1">
            <label htmlFor="password" className="text-sm">
              New Password
            </label>
            <Input
              {...register('password')}
              id="password"
              type="password"
              placeholder="Password"
            />
            {errors?.password && (
              <div className="-mt-3 w-full rounded-sm bg-destructive px-3 py-0.5 text-sm font-medium text-destructive-foreground">
                {`${errors.password.message}`}
              </div>
            )}
          </div>
          {/* confirmPassword */}
          <div className="w-full space-y-1">
            <label htmlFor="confirmPassword" className="text-sm">
              Confirm New Password
            </label>
            <Input
              {...register('confirmPassword')}
              id="confirmPassword"
              type="password"
              placeholder="Re-enter password"
            />
            {errors?.confirmPassword && (
              <div className="-mt-3 w-full rounded-sm bg-destructive px-3 py-0.5 text-sm font-medium text-destructive-foreground">
                {`${errors.confirmPassword.message}`}
              </div>
            )}
          </div>

          <Button className="mt-6 w-3/4 uppercase" size="lg" type="submit">
            Update
          </Button>
        </div>
      </form>
      <Separator className="my-6 w-1/2" orientation="horizontal" />

      <Button
        variant="link"
        className="mt-12 text-lg font-medium text-blue-600 hover:underline"
      >
        <Link href="/login" className="flex items-center justify-center gap-2">
          <FaArrowLeft />
          Return to login page
        </Link>
      </Button>
    </div>
  );
}
