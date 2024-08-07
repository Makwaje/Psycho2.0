'use client';

import { useForm } from 'react-hook-form';

import Link from 'next/link';
import { FaGoogle, FaSquareFacebook, FaSquareXTwitter } from 'react-icons/fa6';

import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/chad-cn/button';
import { Input } from '@/components/ui/chad-cn/input';
import { Separator } from '@/components/ui/chad-cn/separator';
import Headers from '@/components/ui/Headers';
import { loginSchema, TLoginSchema } from '@/lib/types';
import { useRouter } from 'next/navigation';

import axios from 'axios';

export default function LogInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const router = useRouter();

  async function onSubmit(formData: TLoginSchema) {
    const { data } = await axios.post('/api/auth/login', formData);

    console.log(data);

    if (data.status === 'success' && typeof window !== 'undefined') {
      window.localStorage.setItem('session', JSON.stringify(data.data.user));
      router.push('/app');
    } else if (data.message === 'Please verify your email to proceed.') {
      window.localStorage.setItem('session', JSON.stringify(data.data));
      router.push('/verify');
    }
  }

  return (
    <div className="relative flex w-full flex-col items-center justify-center md:w-1/2">
      <Link
        className="absolute left-6 top-4 bg-accent-foreground p-4 text-2xl text-accent md:text-4xl"
        href="/"
      >
        <Headers size="sm">Psycho</Headers>
      </Link>
      <div className="flex flex-col justify-between">
        <Headers size="xl" className="mx-auto mb-20 text-2xl md:text-4xl">
          Welcome back!
        </Headers>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-80 flex-col items-center justify-center gap-4">
          {/* Email */}
          <div className="w-full max-w-2xl space-y-1">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <Input
              {...register('email')}
              id="email"
              type="text"
              placeholder="Example@email.com"
              className="w-full"
            />
          </div>
          {errors?.email && (
            <div className="-mt-2 w-full rounded-sm bg-destructive px-3 py-0.5 text-sm font-medium text-destructive-foreground">
              {`${errors.email.message}`}
            </div>
          )}
          {/* Password */}
          <div className="w-full space-y-1">
            <label htmlFor="password" className="text-sm">
              Password
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
            <label className="ml-[11.5rem] text-xs font-semibold text-destructive hover:underline">
              <Link href="/reset">forgot your password?</Link>
            </label>
          </div>
          <Button
            disabled={isSubmitting}
            className="mt-6 w-3/4 uppercase"
            size="lg"
            type="submit"
          >
            Login
          </Button>
        </div>
      </form>
      <Separator className="my-6 w-1/2" orientation="horizontal" />
      <p className="mb-6">Or login with</p>
      <div className="space-x-4">
        <Button variant="secondary" className="px-4 py-8">
          <FaSquareXTwitter size={40} />
        </Button>
        <Button variant="secondary" className="px-4 py-8">
          <FaGoogle size={40} />
        </Button>
        <Button variant="secondary" className="px-4 py-8">
          <FaSquareFacebook size={40} />
        </Button>
      </div>
      <p className="mt-4 text-lg font-medium">
        Don&#39;t have an account?
        <Button variant="link" className="pl-1 text-lg text-blue-600">
          <Link href="/signup">Signup</Link>
        </Button>
      </p>
    </div>
  );
}
