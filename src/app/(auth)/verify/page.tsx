"use client";

import Headers from "@/components/ui/Headers";
import { Button } from "@/components/ui/chad-cn/button";
import { Input } from "@/components/ui/chad-cn/input";
import { Separator } from "@/components/ui/chad-cn/separator";
import Link from "next/link";

import { useState } from "react";
import OtpInput from "react-otp-input";

export default function VerifyPage() {
  const [otp, setOtp] = useState("");

  const email = "makwaje@gmail.com";

  function handleSubmitCode() {
    console.log(otp);
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
          We&apos;ve sent you a code in{""}
          <span className="block text-center font-bold">({email})</span>
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
      <Button variant="link" className="pl-1 text-lg text-blue-600">
        Resend
      </Button>
    </div>
  );
}