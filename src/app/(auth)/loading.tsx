import { CgSpinner } from "react-icons/cg";

function Loading() {
  return (
    <div className="relative flex w-full animate-spin flex-col items-center justify-center text-8xl font-extrabold md:w-1/2">
      <CgSpinner />
    </div>
  );
}

export default Loading;
