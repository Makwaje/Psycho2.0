import Headers from '@/components/ui/Headers'
import { Button } from '@/components/ui/chad-cn/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/chad-cn/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Reports() {
  return (
    <div>
      <Headers size='xl'>Reports</Headers>
      <Headers size='sm'>31/12/2030</Headers>
      <div>
        <Card className='flex p-4 w-[37rem]'>
            <Image  src="/doctor.jpg"
            width={190}
            height={140}
            alt="The doctor"
            className="rounded-full"/>
                 <CardHeader>
                  <Headers size='lg'>
                   Musab Softare
                  </Headers>
                  <p className='font-bold'>
                    25 Years
                  </p>
                  <p className='font-bold'>
                    50.3kg
                  </p>
                  <p className='font-bold'>
                    single
                  </p>
          </CardHeader>
          <Link href='settings/profile' className=' self-end'>
          <Button size='lg' >Edit</Button>
          </Link>
        </Card>
      </div>
    </div>
  )
}
