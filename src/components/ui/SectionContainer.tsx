import React, { ReactNode } from "react";

type SectionContinuerProps = {
  children: React.ReactNode;
};

function SectionContainer({ children }: SectionContinuerProps) {
  return <div className=" mx-auto mb-12 max-w-[120rem]">{children}</div>;
}

export default SectionContainer;
