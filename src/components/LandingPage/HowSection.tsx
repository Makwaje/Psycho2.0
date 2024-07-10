import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/chad-cn/card';
import Image from 'next/image';
import React from 'react';
import Headers from '@components/ui/Headers';
import SectionContainer from '@components/ui/SectionContainer';

export default function HowSection(): React.ReactNode {
  return (
    <SectionContainer>
      <div className="mt-12">
        <div className="mt-12 rounded-2xl pb-12">
          <Headers
            className="text-center font-extrabold tracking-wider"
            size="xxl"
          >
            How our program helps
          </Headers>
        </div>
        <div className="grid grid-cols-2 grid-rows-4 place-items-center ">
          <CardComponent
            title="Feel depressed?"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rerum voluptatem, a error ad ab vitae magni explicabo."
            image="card2.svg"
            direction="right"
            last={false}
          />
          <CardComponent
            title="Like do I really care?"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rerum voluptatem, a error ad ab vitae magni explicabo."
            image="card2.svg"
            direction="left"
            last={false}
          />
          <CardComponent
            title="When did I ask?"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rerum voluptatem, a error ad ab vitae magni explicabo."
            image="card2.svg"
            direction="right"
            last={false}
          />
          <CardComponent
            title="You need some milk"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rerum voluptatem, a error ad ab vitae magni explicabo."
            image="card2.svg"
            direction="left"
            last={true}
          />
        </div>
      </div>
    </SectionContainer>
  );
}

type CardComponentProps = {
  title: string;
  content: string;
  image: string;
  direction: 'left' | 'right';
  last: boolean;
};

function CardComponent({
  title,
  content,
  image,
  direction,
  last,
}: CardComponentProps): React.JSX.Element {
  return (
    <>
      {direction === 'left' && last === false && (
        <Image
          src="/Arrow.png"
          width={'300'}
          height={'300'}
          className="self-end justify-self-end opacity-30"
          alt="arrow"
        />
      )}
      {last === true && <div></div>}
      <Card className="flex h-96 max-w-sm flex-col">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
          <div className="relative">
            <Image
              src={image}
              width={'250'}
              height={'250'}
              className="absolute -bottom-28 -right-6 -top-8 max-w-[10rem] justify-self-start opacity-50 sm:top-0 md:max-w-fit"
              alt="hands"
            />
          </div>
        </CardContent>
      </Card>

      {direction === 'right' && (
        <Image
          src="/Arrow.png"
          width={'300'}
          height={'300'}
          className="-scale-x-100 self-end justify-self-start opacity-30"
          alt="arrow"
        />
      )}
    </>
  );
}
