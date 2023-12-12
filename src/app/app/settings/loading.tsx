import { CgSpinner } from "react-icons/cg";

function loading() {
  return (
    <div className="h-full animate-spin items-center justify-center text-8xl font-extrabold">
      <CgSpinner />
    </div>
  );
}

export default loading;
