'use client';

import { useForm } from 'react-hook-form';

import Link from 'next/link';
import { FaGoogle, FaSquareFacebook, FaSquareXTwitter } from 'react-icons/fa6';

import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/chad-cn/button';
import { Input } from '@/components/ui/chad-cn/input';
import { Separator } from '@/components/ui/chad-cn/separator';
import Headers from '@/components/ui/Headers';
import { signUpSchema, TSignUpSchema } from '@/lib/types';
import { useRouter } from 'next/navigation';

import axios from 'axios';

export default function SignUpPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  async function onSubmit(formData: TSignUpSchema) {
    const { data } = await axios.post('/api/auth/signup', formData);

    console.log(data);

    if (data.status === 'success' && typeof window !== 'undefined') {
      window.localStorage.setItem('session', JSON.stringify(data.user));
      router.push(`/verify?id=${data.user.id}`);
    } else if (data?.message === 'User already exist') {
      // TASK // SHOW A toast that says: 'User already exist'
    }
  }

  return (
    <div className="relative flex w-full flex-col items-center justify-center md:w-1/2">
      <div className="flex">
        <Link
          className="absolute left-6 top-4 bg-accent-foreground p-4 text-2xl text-accent md:text-4xl"
          href="/"
        >
          <Headers size="sm">Psycho</Headers>
        </Link>
        <Headers size="xl" className="mx-auto text-3xl md:text-4xl">
          SignUp
        </Headers>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-80 flex-col items-center justify-center gap-4">
          {/* FullName */}
          <div className="w-full max-w-2xl space-y-1">
            <label htmlFor="name" className="text-sm">
              Full Name
            </label>
            <Input
              {...register('name')}
              id="name"
              type="text"
              placeholder="Mohamed alfadel"
              className="w-full"
            />
          </div>
          {errors?.name && (
            <div className="-mt-2 w-full rounded-sm bg-destructive px-3 py-0.5 text-sm font-medium text-destructive-foreground">
              {`${errors.name.message}`}
            </div>
          )}
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
          </div>
          {/* confirmPassword */}
          <div className="w-full space-y-1">
            <label htmlFor="confirmPassword" className="text-sm">
              Confirm Password
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

          {/* Phone Number */}
          {/* <div className="w-full max-w-2xl space-y-1">
            <label htmlFor="phoneNumber" className="text-sm">
              Phone number
            </label>
            <Input
              {...register('phoneNumber')}
              id="phoneNumber"
              type="number"
              placeholder="09XXXXXXXX"
              className="w-full"
            />
          </div>  */}

          <Button
            disabled={isSubmitting}
            className="mt-6 w-3/4 uppercase"
            size="lg"
            type="submit"
          >
            SignUp
          </Button>
        </div>
      </form>

      <Separator className="my-6 w-1/2" orientation="horizontal" />
      <div className="flex flex-col items-center justify-center">
        <p className="mb-6">Or SignUp With</p>
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
          Already have an account?
          <Button variant="link" className="pl-1 text-lg text-blue-600">
            <Link href="/login">Login</Link>
          </Button>
        </p>
      </div>
    </div>
  );
}
