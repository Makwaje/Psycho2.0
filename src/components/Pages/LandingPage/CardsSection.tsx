import SectionContainer from "@/components/ui/SectionContainer";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/chad-cn/card";
import React from "react";

function CardsSection() {
  return (
    <SectionContainer>
      <div className="gradient rounded-lg p-16 ">
        <div className="grid grid-cols-2 gap-2 xl:grid-cols-3">
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </div>
    </SectionContainer>
  );
}

export default CardsSection;

function CardComponent(): React.ReactNode {
  return (
    <Card className="h-[30rem] duration-200 animate-out hover:scale-[101%]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
