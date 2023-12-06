import { Button } from "@/components/ui/chad-cn/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/chad-cn/card";
import { VerifiedIcon } from "lucide-react";
import Image from "next/image";
import { LuClock3, LuStar, LuTimerReset, LuX } from "react-icons/lu";

export default function DoctorsPage() {
  return (
    <div className="grid w-full justify-items-center gap-x-2 gap-y-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </div>
  );
}

function CardComponent() {
  const name = "Musab Ibrahim";
  const responseTime = Math.floor(Math.random() * 11 + 20);
  const rating = Math.floor(Math.random() * 11);
  const availabilityTime = "7:25PM - 10:45AM";

  return (
    <>
      <Card className="flex w-full min-w-fit flex-col gap-4 drop-shadow-md lg:h-[22.5rem] lg:w-[22.5rem]">
        <CardHeader>
          <CardTitle className="flex gap-1">
            {name} <VerifiedIcon size={20} stroke="white" fill="black" />
          </CardTitle>
          <CardDescription>Absolute Genius - Senior Psycho </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-row items-center gap-x-4 gap-y-2">
          {/* IMAGE */}
          <Image
            src="/doctor.jpg"
            width={140}
            height={140}
            alt="The doctor"
            className="rounded-full"
          />
          {/* TIME */}
          <div className="flex flex-col gap-2 ">
            <div className="flex items-center gap-1.5">
              <LuTimerReset size={25} />
              <div className="text-sm">
                <p className="font-medium">Response time</p>
                <span className="text-xs">within {responseTime} minutes</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <LuStar size={25} />
              <div className="text-sm">
                <p className="font-medium">Rating</p>
                <span className="text-xs">{rating}/10</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <LuClock3 size={25} />
              <div className="text-sm">
                <p className="font-medium">Availability time</p>
                <span className="text-xs">{availabilityTime}</span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className=" flex flex-row-reverse gap-2">
          <Button variant="default">Send chat request</Button>
          <Button variant="secondary">Details</Button>
        </CardFooter>
      </Card>
    </>
  );
}
