"use client";
import Headers from "@/components/ui/Headers";
import SectionContainer from "@/components/ui/SectionContainer";
import Image from "next/image";

function Free2Section() {
  return (
    <SectionContainer>
      <div className="relative h-[60dvh] rounded-md p-14 ring-4 ring-ring">
        <Headers size="xl" className="mb-8">
          This service is 100% FREE.
          <span className=" ml-8 text-sm font-medium tracking-widest opacity-60">
            LMAO you think so?
          </span>
        </Headers>
        <Headers size={"default"}>All the doctors here are volunteers.</Headers>

        <Image
          src="/card2.svg"
          alt="anxiety"
          width="700"
          height="500"
          className="absolute -bottom-16 right-0 -z-30 opacity-0 transition-opacity duration-200"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />

        <p className="absolute bottom-2 p-2 font-medium">
          fell free to donate them :)
        </p>
      </div>
    </SectionContainer>
  );
}

export default Free2Section;
