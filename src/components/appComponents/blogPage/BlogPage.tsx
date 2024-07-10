import { BookmarkIcon } from 'lucide-react';
import Image from 'next/image';

import { Badge } from '../../ui/chad-cn/badge';
import { Button } from '../../ui/chad-cn/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../ui/chad-cn/card';

function BlogPage() {
  return (
    <>
      <div className=" mx-auto grid max-w-[95%] place-items-center gap-y-4 py-8">
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

export default BlogPage;

function CardComponent() {
  return (
    <Card className="flex h-52 w-full rounded-3xl shadow-md ring-[0.5px] ring-ring drop-shadow-sm duration-150 hover:scale-[1.005] hover:shadow-xl hover:ring-2 hover:drop-shadow-md">
      <Image
        src="/doctor.jpg"
        alt="article"
        width={200}
        height={100}
        className="rounded-3xl ring-1 ring-ring"
      />
      <CardHeader className="space-y-4">
        <CardTitle>5 Tips to die quickly</CardTitle>

        <CardDescription>Dr. Musab Ibrahim</CardDescription>
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

      <CardFooter className="ml-auto space-x-4 self-end">
        <Button variant="ghost">
          <BookmarkIcon />
        </Button>
        <Button>Read more</Button>
      </CardFooter>
    </Card>
  );
}
