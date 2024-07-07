import Headers from "@/components/ui/Headers";
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

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/chad-cn/dialog";
import { Separator } from "@/components/ui/chad-cn/separator";

export default function DoctorsPage() {
  return (
    <>
      <Headers size="xl" className="pb-10 font-extrabold">
        Our doctors
      </Headers>
      <div className="flex flex-wrap items-center justify-center gap-4">
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
    </>
  );
}

function CardComponent() {
  const name = "Musab Ibrahim";
  const responseTime = Math.floor(Math.random() * 11 + 20);
  const rating = Math.floor(Math.random() * 11);
  const availabilityTime = "7:25PM - 10:45AM";

  return (
    <>
      <Card className="flex h-fit min-w-fit max-w-xl flex-grow flex-col gap-4 drop-shadow-md">
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
          {/* MODAL */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">Details</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-1 text-2xl">
                  {name} <VerifiedIcon />
                </DialogTitle>

                <DialogDescription>
                  {/* IMAGE */}
                  <Image
                    src="/doctor.jpg"
                    width={300}
                    height={300}
                    alt="The doctor"
                    className="mx-auto my-8 rounded-md"
                  />
                  {/* TIME */}
                  <div className="flex flex-row items-center justify-center gap-6 text-center">
                    <div className="flex flex-col items-center gap-1.5">
                      <LuTimerReset size={35} />
                      <div className="text-sm">
                        <p className="font-medium">Response time</p>
                        <span className="text-xs">
                          within {responseTime} minutes
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <LuStar size={35} />
                      <div className="text-sm">
                        <p className="font-medium">Rating</p>
                        <span className="text-xs">{rating}/10</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <LuClock3 size={35} />
                      <div className="text-sm">
                        <p className="font-medium">Availability time</p>
                        <span className="text-xs">{availabilityTime}</span>
                      </div>
                    </div>
                  </div>
                  <Separator className="my-4" />

                  <div className="mt-8 space-y-4">
                    <Headers size="lg" className="text-left">
                      Bio
                    </Headers>
                    <p className="px-6 text-left text-lg">
                      An an valley indeed so no wonder future nature vanity.
                      Debating all she mistaken indulged believed provided
                      declared. He many kept on draw lain song as same. Whether
                      at dearest certain spirits is entered in to. Rich fine
                      bred real use too many good. She compliment unaffected
                      expression favourable any. Unknown chiefly showing to
                      conduct no. Hung as love evil able to post at as.
                    </p>
                  </div>
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="mt-4 sm:justify-end">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
                <Button variant="default">Send chat request</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </>
  );
}
