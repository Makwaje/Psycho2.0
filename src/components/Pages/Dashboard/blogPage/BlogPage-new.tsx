import { BookmarkIcon, VerifiedIcon } from "lucide-react";
import Image from "next/image";
import Hizb from "@/../public/hizb.jpg";
import doctorImage from "@/../public/doctor.jpg";

import { Badge } from "@/components/ui/chad-cn/badge";
import { Button } from "@/components/ui/chad-cn/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/chad-cn/card";

import { Separator } from "@/components/ui/chad-cn/separator";
import { TbThumbUp } from "react-icons/tb";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/chad-cn/avatar";

function BlogPageNew() {
  return (
    <section className=" mx-auto grid max-w-5xl place-items-center gap-y-8 py-8">
      <PostComponent image />
      <PostComponent />

      <PostComponent image />
      <PostComponent />

      <PostComponent image />
      <PostComponent />

      <PostComponent image />
      <PostComponent />
    </section>
  );
}

export default BlogPageNew;

function PostComponent({ image = false }: { image?: boolean }) {
  return (
    <Card className="flex h-fit w-full flex-col rounded-md shadow-md ring-[0.5px] ring-ring drop-shadow-sm duration-150 hover:scale-[1.005] hover:shadow-xl hover:ring-2 hover:drop-shadow-md">
      <CardHeader className="space-y-2">
        <CardTitle>5 Tips to die quickly</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <Avatar className="ring-[1px] ring-ring/50">
            <AvatarImage>
              <Image src={doctorImage} alt="doctor avatar" />
            </AvatarImage>
            <AvatarFallback className="bg-secondary font-bold text-secondary-foreground">
              MI
            </AvatarFallback>
          </Avatar>
          <span className="flex gap-0.5 text-base font-medium">
            Dr. Musab Ibrahim{" "}
            <VerifiedIcon
              size={20}
              stroke="white"
              fill="black"
              className="opacity-75"
            />
          </span>
        </CardDescription>
        <Separator className="bg-ring opacity-50" />
        <div className="flex flex-wrap items-center justify-start gap-2 ">
          <Badge variant="secondary" className="bg-red-200">
            Depression
          </Badge>
          <Badge variant="secondary" className="bg-indigo-200">
            Mental health
          </Badge>
          <Badge variant="secondary" className="bg-emerald-200/80">
            PSTD
          </Badge>
        </div>
      </CardHeader>

      <p className="font-base max-w-[75%] self-center text-center text-xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
        quam a omnis facilis et, consectetur voluptas mollitia quo aspernatur?
        Accusamus officia optio molestiae...{" "}
        <a
          href="#"
          className="text-lg font-semibold text-blue-800 duration-150 hover:text-blue-950"
        >
          Read More
        </a>
      </p>

      {image && (
        <Image
          src={Hizb}
          alt="article"
          quality={35}
          width={250}
          className="m-4 mx-auto rounded-3xl ring-1 ring-ring"
        />
      )}

      <CardFooter className="flex justify-between space-x-4">
        <div className="flex items-center justify-center gap-1">
          <span className="font-medium text-primary">
            {Math.floor(Math.random() * 2000)}
          </span>
          <TbThumbUp
            size={24}
            className="mb-1 fill-primary-foreground stroke-primary"
          />
        </div>
        <div className="flex items-center justify-center">
          <Button variant="ghost">
            <BookmarkIcon />
          </Button>
          <Button>Read more</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
