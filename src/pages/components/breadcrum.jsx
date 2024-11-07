import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { Breadcrumbs, Card, CardBody, CardHeader } from '@material-tailwind/react';
import React from 'react'

export const BreadcrumbPage = () => {
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
                  Breadcrum Components
                </CardHeader>
                <CardBody className='p-3'>
                  We hear your feedback. Although breadcrumbs are not a standard on mobile devices, if you ask for a feature we will add it!
                </CardBody>
              </Card>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-16">
        <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
          <div className="container mx-auto">
            {/* Classic */}
            <Card className='mb-6'>
              <CardBody>
                <h4 className='font-bold'>Breadcrumbs on Mobile?</h4>
                <p className='mb-6 text-sm'>We hear your feedback. Although breadcrumbs are not a standard on mobile devices, if you ask for a feature we will add it!</p>

                <Breadcrumbs className='mb-5'>
                  <a href="#" className="opacity-60">
                    Docs
                  </a>
                  <a href="#" className="opacity-60">
                    Components
                  </a>
                  <a href="#">Breadcrumbs</a>
                </Breadcrumbs>
                <Breadcrumbs className='mb-5'>
                  <a href="#" className="opacity-60">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </a>
                  <a href="#" className="opacity-60">
                    <span>Components</span>
                  </a>
                  <a href="#">Breadcrumbs</a>
                </Breadcrumbs>
                <Breadcrumbs
                  separator={
                    <ArrowLongRightIcon className="h-4 w-4 text-white" strokeWidth={2.5} />
                  }
                  className="rounded-full border border-white bg-gradient-to-tr from-gray-900 to-gray-800 p-1"
                >
                  <a
                    href="#"
                    className="rounded-full bg-white px-3 py-1 font-medium text-gray-900"
                  >
                    Docs
                  </a>
                  <a
                    href="#"
                    className="rounded-full bg-white px-3 py-1 font-medium text-gray-900"
                  >
                    Components
                  </a>
                  <a
                    href="#"
                    className="rounded-full bg-white px-3 py-1 font-medium text-gray-900"
                  >
                    Breadcrumbs
                  </a>
                </Breadcrumbs>
              </CardBody>
            </Card>

          </div>
        </div>
      </section>
    </>
  )
}

export default BreadcrumbPage;
