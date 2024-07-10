'use client';
import Image from 'next/image';
import Headers from '../ui/Headers';
import SectionContainer from '../ui/sectionContainer';

function Free2Section() {
  return (
    <SectionContainer>
      <div className="relative mx-8 h-[60dvh] rounded-md p-6  ring-4 ring-ring md:mx-0 md:p-14">
        <Headers
          size="xl"
          className="mb-4 text-2xl md:mb-8 md:text-left md:text-4xl"
        >
          This service is 100% FREE.
          <span className=" ml-2 text-xs font-medium tracking-widest opacity-60 md:ml-8">
            LMAO you think so?
          </span>
        </Headers>
        <Headers size={'default'} className="text-xl md:text-2xl">
          All the doctors here are volunteers.
        </Headers>

        <Image
          src="/card2.svg"
          alt="anxiety"
          width="700"
          height="500"
          className="absolute -bottom-4 right-0 -z-30 w-96 opacity-0 transition-opacity duration-200 md:-bottom-16 md:w-[700px]"
          onLoadingComplete={(image) => image.classList.remove('opacity-0')}
        />

        <p className="absolute bottom-2 flex flex-col p-2 font-medium">
          fell free to donate them :)
          <span className="text-xs">
            come on, you think your worth something?, pay them
          </span>
        </p>
      </div>
    </SectionContainer>
  );
}

export default Free2Section;
