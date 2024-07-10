import { Badge } from '@components/ui/chad-cn/badge';
import { Separator } from '@components/ui/chad-cn/separator';
import Image from 'next/image';
import hizb from '@../public/hizb.jpg';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowLeftSquare,
  ArrowLeftSquareIcon,
  BookmarkIcon,
} from 'lucide-react';
import { TbThumbUp } from 'react-icons/tb';
import { Button } from '@components/ui/chad-cn/button';
import Headers from '@components/ui/Headers';

function ArticlePage() {
  return (
    <article>
      <header className="bg sticky top-0 bg-background/95">
        <Headers size="lg" className="pt-2">
          5 Tips to kill yourself in unique way{' '}
          <span className="text-red-700">(MUST Try!)</span>
        </Headers>

        <div className="my-4 flex flex-wrap items-center justify-start gap-2 ">
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

        <div className="flex items-center justify-center gap-1 self-end">
          <Button variant="ghost" className="space-x-1">
            <span className="font-medium text-primary">
              {Math.floor(Math.random() * 2000)}
            </span>
            <TbThumbUp
              size={24}
              className="mb-1 fill-primary-foreground stroke-primary"
            />
          </Button>

          <Button variant="ghost">
            <BookmarkIcon />
          </Button>
        </div>

        <Separator className="my-4" />

        <span className="text-sm font-medium text-foreground">
          Dr. Musab Ibrahim
        </span>

        <Separator className="my-4" />

        <Link
          href="/app"
          className="flex w-fit items-center gap-2 rounded-lg px-2 py-1 text-lg font-semibold ring-[0.15rem] ring-ring duration-75 hover:scale-110 hover:bg-card"
        >
          <ArrowLeftSquare
            className="fill-primary-foreground stroke-primary"
            size={32}
          />{' '}
          Back
        </Link>
      </header>

      <div>
        <Image
          src={hizb}
          alt="article"
          quality={75}
          width={400}
          className="m-4 mx-auto rounded-3xl ring-1 ring-ring"
        />
      </div>

      <div>
        <p className="mx-auto my-8 max-w-4xl text-center font-normal leading-relaxed tracking-wider">
          earum animi mollitia voluptas quasi quia, pariatur optio? Dolore earum
          itaque odit laborum, vel sequi assumenda maxime ipsa sunt cum ipsam
          vitae ab eius asperiores suscipit modi dicta sed omnis optio? Dolorum,
          esse eius placeat suscipit, quia debitis illum rerum molestiae sit quo
          aliquid accusantium eaque nostrum tempore totam. Corrupti eos in quam
          ducimus, exercitationem nostrum, nobis adipisci distinctio eum placeat
          molestiae iure ipsa sapiente dolore accusamus fugiat hic suscipit
          saepe consectetur deleniti quasi tenetur error? Porro cum qui sequi
          sit sed maxime possimus quis magni eligendi adipisci. Similique quam
          cupiditate esse sunt illum, totam quo est deleniti aspernatur quas
          placeat eum praesentium consectetur consequatur dolor eligendi aliquid
          rem iste distinctio! Molestiae non nostrum corrupti quod laborum
          suscipit numquam voluptatem aut obcaecati et. Quisquam facere quasi
          doloremque praesentium autem voluptatibus voluptas quidem obcaecati
          repellendus quibusdam vitae aliquam, necessitatibus eveniet laborum
          nihil, a, officiis assumenda deserunt. Perspiciatis ipsum, velit
          possimus distinctio et modi cum doloremque accusamus, ut harum in amet
          facilis vero unde eligendi magni sequi recusandae autem ipsam ratione
          corporis voluptates. Similique officiis excepturi, distinctio eligendi
          ipsum quo unde earum quas praesentium, ipsa illo aperiam dolores
          soluta cum laboriosam nisi corrupti iusto nam a neque nobis alias
          totam voluptates! Exercitationem nam sit rerum quae! Neque impedit ex
          officiis modi, reprehenderit labore perferendis consequuntur
          architecto voluptates sed, laboriosam in. Reiciendis, minus!
        </p>
      </div>
    </article>
  );
}

export default ArticlePage;
