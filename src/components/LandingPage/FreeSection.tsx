import Headers from '../ui/Headers';
import SectionContainer from '../ui/SectionContainer';

function FreeSection() {
  return (
    <SectionContainer>
      <div className="flex h-[100dvh] flex-col items-center justify-center bg-card text-center">
        <Headers className=" text-9xl font-extrabold md:tracking-[2.2rem]">
          100% FREE
        </Headers>
        <p className="mt-4 text-sm tracking-widest opacity-60">
          This is x10 times cheaper than you
        </p>
        <p className="mt-4 text-sm tracking-widest opacity-60">
          (the offer above is available only for suicidal people)
        </p>
      </div>
    </SectionContainer>
  );
}

export default FreeSection;
