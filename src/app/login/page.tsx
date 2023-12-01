"use client";

import Headers from "@/components/ui/Headers";
import { Button } from "@/components/ui/chad-cn/button";
import { Input } from "@/components/ui/chad-cn/input";
import { useForm } from "react-hook-form";
import { Separator } from "@/components/ui/chad-cn/separator";
import { FaGoogle, FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

function AuthPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function onSubmit(data: Object) {
    console.log(data);
  }

  return (
    <div className="flex h-[100dvh]">
      <div className="hidden w-2/3 bg-destructive md:block">
        <Image
          width={0}
          height={0}
          className="hidden h-screen w-full object-cover md:block"
          src=" AssetLogin.svg"
          alt="hi mom"
        />
      </div>

      <div className="relative flex w-full flex-col items-center justify-center md:w-1/2">
        <Link
          className="absolute left-6 top-4 bg-accent-foreground p-4 text-2xl text-accent md:text-4xl"
          href="/"
        >
          <Headers size="xl">Psycho</Headers>
        </Link>
        <div className="flex flex-col justify-between">
          <Headers size="xl" className="mx-auto mb-20 text-2xl md:text-4xl">
            Welcome back!
          </Headers>
        </div>
        <form>
          <div className="flex w-80 flex-col items-center justify-center gap-4">
            {/* Email */}
            <div className="w-full max-w-2xl space-y-1">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <Input
                id="email"
                {...register("email")}
                placeholder="Example@email.com"
                className="w-full"
              />
            </div>
            {/* Password */}
            <div className="w-full space-y-1">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <Input
                id="password"
                type="password"
                {...register("password")}
                placeholder="Password"
              />
              <label className="ml-[11.5rem] text-xs font-semibold text-destructive hover:underline">
                <Link href="/reset">forgot your password?</Link>
              </label>
            </div>
            <Button className="mt-6 w-3/4 uppercase" size="lg" type="submit">
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
    </div>
  );
}
export default AuthPage;
