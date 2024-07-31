'use client';

import { Button } from '@/components/ui/chad-cn/button';
import { Input } from '@/components/ui/chad-cn/input';
import { Separator } from '@/components/ui/chad-cn/separator';
import Headers from '@/components/ui/Headers';
import useSession from '@/hooks/useSession';
import { SessionTypes } from '@/lib/types';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';

export default function VerifyPage() {
  const [otp, setOtp] = useState('');
  const router = useRouter();
  const session = useSession() as SessionTypes;

  console.log(session?.id);

  async function handleSubmitCode() {
    const res = await fetch(
      `http://localhost:8085/api/v1/users/verify-otp/66a662c121460a26b4d0e461`,
      {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({
          code: otp,
        }),
        headers: {
          'Content-type': 'application/json',
        },
      }
    );

    const requestData = await res.json();

    console.log(requestData);

    // if (req?.data.message === 'OTP verified successfully') router.push('/login');
  }

  useEffect(
    function () {
      if (session === null) router.replace('/login');
    },
    [router, session]
  );

  async function RequestOTP() {
    const data = await axios.get(
      `${'http://localhost:8085/api/v1'}/users/request-otp/${session?.id}`
    );
    console.log(data);
  }

  return (
    <div className="relative flex w-full flex-col items-center justify-center md:w-1/2">
      <Link
        className="absolute left-6 top-4 bg-accent-foreground p-4 text-2xl text-accent md:text-4xl"
        href="/"
      >
        <Headers size="xl">Psycho</Headers>
      </Link>
      <div className="flex flex-col items-center">
        <Headers size="xxl" className="mx-auto mb-10 text-6xl">
          Verification
        </Headers>
        <p className="mb-10">
          We&apos;ve sent you a code in{''}
          <span className="block text-center font-bold">
            ({session?.email})
          </span>
        </p>
      </div>

      <div className="flex w-80 flex-col items-center justify-center gap-4">
        {/* Email */}
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm">
            Code
          </label>
          <OtpInput
            skipDefaultStyles
            value={otp}
            onChange={setOtp}
            numInputs={6}
            placeholder="******"
            renderSeparator={<span className="mx-1">-</span>}
            renderInput={(props) => (
              <Input
                id="code"
                {...props}
                className="w-11 text-center text-xl font-bold placeholder:opacity-25"
                type="number"
              />
            )}
          />
        </div>

        <Button
          className="mt-6 w-3/4 uppercase"
          size="lg"
          type="submit"
          onClick={handleSubmitCode}
          disabled={otp.length !== 6}
        >
          Submit
        </Button>
      </div>

      <Separator className="my-6 w-1/2" orientation="horizontal" />
      <p className="mt-4 text-lg font-medium">Didn&apos;t receive the code?</p>
      <Button
        variant="link"
        className="pl-1 text-lg text-blue-600"
        onClick={() => RequestOTP()}
      >
        Resend
      </Button>
    </div>
  );
}
