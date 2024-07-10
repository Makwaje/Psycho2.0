'use client';
import { Button } from '@components/ui/chad-cn/button';
import { ArrowUpIcon } from 'lucide-react';
import Link from 'next/link';
import Headers from '../ui/Headers';

function CtaSection() {
  return (
    <div className="cta-background relative flex h-[100dvh] flex-col items-center justify-center gap-6 bg-accent-foreground text-accent">
      <Headers
        size="xxl"
        className="text-center text-4xl font-extrabold uppercase sm:text-5xl "
      >
        You&apos;re not alone
      </Headers>
      <p className="text-xl text-accent opacity-60">
        (guess what?, <strong>you&#39;re 💀</strong>)
      </p>
      <Link href="/login">
        <Button
          size="lg"
          variant="outline"
          className="uppercase text-accent-foreground ring-8 ring-primary transition-all duration-150 hover:bg-primary hover:text-primary-foreground"
        >
          Get Help Now
        </Button>
      </Link>
      <ArrowUpIcon />
      <p className="font-bold opacity-75">You think it works 😂?</p>
    </div>
  );
}

export default CtaSection;
