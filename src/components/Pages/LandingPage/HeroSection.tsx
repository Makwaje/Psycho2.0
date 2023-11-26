"use client";
import Headers from "@/components/ui/Headers";
import { Button } from "@/components/ui/chad-cn/button";
import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <div className="flex h-[100dvh] min-w-full flex-row items-center justify-center gap-52">
      <div className="flex flex-col gap-32 text-left">
        <div className="space-y-4 text-left">
          <Headers size="xxl" className=" uppercase">
            Psycho
          </Headers>
          <p className="max-w-sm ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic odio
            temporibus maiores exercitationem quisquam accusantium ea asperiores
            nostrum magnam esse mollitia eos est alias excepturi cupiditate eius
            deserunt fugit deleniti velit sit
          </p>
        </div>
        <Button size="lg" variant="default" className="w-48 uppercase">
          Get Help Now
        </Button>
      </div>
      <Image
        src="/card3.svg"
        alt="anxiety"
        width="500"
        height="500"
        className="opacity-0 transition-opacity duration-200"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
    </div>
  );
}

export default HeroSection;
