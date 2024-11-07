import { Card, CardBody, CardHeader } from '@material-tailwind/react';
import React from 'react'

export const CollapsePage = () => {
  return (
    <>
      <section className="relative block h-[20vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>

      <section className="relative bg-white py-16 mb-10">
        <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
          <div className="container mx-auto">
              <Card>
                <CardHeader className='p-5 text-xl font-bold'>
                  Collapse Components
                </CardHeader>
                <CardBody className='p-3'>
                  Simple link list that can get tapped to reveal more content. We used links in our example, you can use anything you want.
                </CardBody>
              </Card>
          </div>
        </div>
      </section>
    </>
  )
}

export default CollapsePage;
