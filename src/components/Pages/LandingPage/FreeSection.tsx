import Headers from "@/components/ui/Headers";
import SectionContainer from "@/components/ui/SectionContainer";
import Image from "next/image";

function FreeSection() {
  return (
    <SectionContainer>
      <div className="flex h-[93dvh] flex-col items-center justify-center bg-card text-center">
        <Headers className=" text-9xl font-extrabold tracking-[2.2rem]">
          100% FREE
        </Headers>
        <p className="mt-4 text-sm tracking-widest opacity-60">
          yes it&apos;s :)
        </p>
      </div>
    </SectionContainer>
  );
}

export default FreeSection;
