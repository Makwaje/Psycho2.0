import Headers from "@/components/ui/Headers";
import { Button } from "@/components/ui/chad-cn/button";
import React from "react";

function HeroSection() {
  return (
    <div className="flex h-[100dvh] min-w-full flex-col items-center justify-center gap-4">
      <Headers size="xxl" className="uppercase">
        Psycho
      </Headers>
      <p className="max-w-sm text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic odio
        temporibus maiores exercitationem quisquam accusantium ea asperiores
        nostrum magnam esse mollitia eos est alias excepturi cupiditate eius
        deserunt fugit deleniti velit sit
      </p>

      <Button size="lg" variant="default" className="mt-4 uppercase">
        Get Help Now
      </Button>
    </div>
  );
}

export default HeroSection;
