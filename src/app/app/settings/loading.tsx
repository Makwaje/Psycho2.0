import { CgSpinner } from "react-icons/cg";

function loading() {
  return (
    <div className=" h-full flex justify-center animate-spin mx-auto items-center text-8xl font-extrabold">
      <CgSpinner />
    </div>
  );
}

export default loading;
