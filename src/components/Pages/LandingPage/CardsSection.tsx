import Headers from "@/components/ui/Headers";
import SectionContainer from "@/components/ui/SectionContainer";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/chad-cn/card";
import React from "react";

function CardsSection() {
  return (
    <SectionContainer>
      <div className=" h-auto rounded-lg p-16">
        <div className="my-16 mt-12 rounded-2xl p-16 ">
          <Headers
            className="text-center font-extrabold tracking-wider"
            size="xxl"
          >
            How our program helps
          </Headers>
        </div>
        <div className="grid grid-cols-2  gap-4 xl:grid-cols-4">
          <Card className=" h-[30rem] bg-[#809A6F] duration-200 animate-out hover:scale-[101%] ">
            <CardHeader>
              <CardTitle className="mb-8">
                {"Emergency Psychotherapy"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                {
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint doloremque soluta officiis distinctio est suscipit! Unde magnam suscipit accusamus quo. Minus fuga, repellendus tenetur aspernatur harum aut illum accusantium blanditiis"
                }
              </p>
            </CardContent>
          </Card>
          <Card className=" h-[30rem] bg-[#A2A378] duration-200 animate-out hover:scale-[101%] ">
            <CardHeader>
              <CardTitle className="mb-8">
                {"Daily art therapy session"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                {
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint doloremque soluta officiis distinctio est suscipit! Unde magnam suscipit accusamus quo. Minus fuga, repellendus tenetur aspernatur harum aut illum accusantium blanditiis"
                }
              </p>
            </CardContent>
          </Card>
          <Card className=" h-[30rem] bg-[#739072] duration-200 animate-out hover:scale-[101%] ">
            <CardHeader>
              <CardTitle className="mb-8">
                {"Weekly self-help support"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                {
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint doloremque soluta officiis distinctio est suscipit! Unde magnam suscipit accusamus quo. Minus fuga, repellendus tenetur aspernatur harum aut illum accusantium blanditiis"
                }
              </p>
            </CardContent>
          </Card>
          <Card className=" h-[30rem] bg-[#ECE3CE] duration-200 animate-out hover:scale-[101%] ">
            <CardHeader>
              <CardTitle className="mb-8">{"Interactive community"}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                {
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint doloremque soluta officiis distinctio est suscipit! Unde magnam suscipit accusamus quo. Minus fuga, repellendus tenetur aspernatur harum aut illum accusantium blanditiis"
                }
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionContainer>
  );
}

export default CardsSection;
