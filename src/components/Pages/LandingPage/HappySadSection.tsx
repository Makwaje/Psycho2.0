import SectionContainer from "@/components/ui/SectionContainer";
import Image from "next/image";

function HappySadSection() {
  return (
    <div className="flex h-[93dvh]">
      <div className="flex w-1/2 items-end justify-center bg-accent-foreground text-accent">
        <Image
          src={"/sad.png"}
          width={450}
          height={1}
          alt="sad person with a lot of terrible thoughts on his mind"
        />
      </div>
      <div className=" flex w-1/2  items-end justify-center bg-accent text-accent-foreground">
        <Image
          src={"/sad2.png"}
          width={450}
          height={1}
          alt="sad person with a lot of terrible thoughts on his mind"
        />
      </div>
    </div>
  );
}

export default HappySadSection;
