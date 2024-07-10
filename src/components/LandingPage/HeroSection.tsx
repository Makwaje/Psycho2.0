'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Headers from '../ui/Headers';
import { Button } from '../ui/chad-cn/button';
import SectionContainer from '../ui/sectionContainer';

function HeroSection() {
  return (
    <SectionContainer>
      <div className="mb-20 mt-20 lg:mt-0 flex h-[93dvh] flex-col items-center justify-center gap-4 px-4 md:flex-row md:gap-32 lg:gap-52">
        <div className="flex flex-col gap-32 text-left">
          <div className="space-y-4 text-left">
            <Headers size="xxl" className="text-center uppercase md:text-left">
              Psycho
            </Headers>
            <p className="max-w-sm text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic odio
              temporibus maiores exercitationem quisquam accusantium ea
              asperiores nostrum magnam esse mollitia eos est alias excepturi
              cupiditate eius deserunt fugit deleniti velit sit
            </p>
          </div>
          <Link href="/login" className="hidden md:block ">
            <Button
              size="lg"
              variant="default"
              className="hidden w-48 uppercase md:block"
            >
              Get Help Now
            </Button>
          </Link>
        </div>
        <Image
          src="/card3.svg"
          alt="anxiety"
          width="500"
          height="500"
          className="opacity-0 transition-opacity duration-200"
          onLoadingComplete={(image) => image.classList.remove('opacity-0')}
        />
        <Link href="/login" className="block w-48 p-3 uppercase md:hidden">
          <Button size="lg" variant="default">
            Get Help Now
          </Button>
        </Link>
      </div>
    </SectionContainer>
  );
}

export default HeroSection;
