/* eslint-disable @next/next/no-img-element */
'use client';

import Headers from '@/components/ui/headers';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { ResponsiveLine } from '@nivo/line';
import Data from '@/lib/Data.json';

import { IoMdPerson } from 'react-icons/io';
import { FaWeight } from 'react-icons/fa';
import { GiRelationshipBounds } from 'react-icons/gi';
import Paragraph from '@/components/ui/paragraph';

export default function Reports() {
  
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const day = new Date().getDate();


  return (
    <div>
      <Headers size="xl">Reports</Headers>
      <Paragraph tracking="lg" variant="thin">
        {`${day}/${month}/${year}`}
      </Paragraph>
      <div>
        <Card className="flex md:w-[30rem] w-full flex-wrap p-4">
          <img
            src="/file.jpg"
            alt="The doctor"
            className="rounded-full h-32 "
          />
          <CardHeader>
            <Headers size="sm">Musab Softare</Headers>
            <div className="rounded-sm p-1">
              <Paragraph
                className="flex items-center gap-1 text-primary"
                variant="uppercase"
                tracking="sm"
              >
                <IoMdPerson />
                25 Years
              </Paragraph>
              <Paragraph
                className="flex items-center gap-1 text-primary"
                tracking="sm"
              >
                <FaWeight />
                50.3KG
              </Paragraph>
              <Paragraph
                className="flex items-center gap-1 text-primary"
                variant="uppercase"
                tracking="sm"
              >
                <GiRelationshipBounds />
                single
              </Paragraph>
            </div>
          </CardHeader>
          <Link href="settings/profile" className="md:self-end">
            <Button size="lg">Edit Profile</Button>
          </Link>
        </Card>
      </div>
      <div className=" md:h-[34rem] md:w-full w-[24rem]">
        <MyResponsiveLine data={Data} />
      </div>
    </div>
  );
}

type dataProps = {
  data: {
    id: string;
    color: string;
    data: {
      x: string;
      y: number;
    }[];
  }[];
};

const MyResponsiveLine = ({ data }: dataProps) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{
      type: 'linear',
      min: 'auto',
      max: 'auto',
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'transportation',
      legendOffset: 36,
      legendPosition: 'middle',
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'count',
      legendOffset: -40,
      legendPosition: 'middle',
    }}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);
