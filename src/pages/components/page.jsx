import { Footer } from '@/widgets/layout'
import { BriefcaseIcon, BuildingLibraryIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react'
import React from 'react'

export const PageComponents = () => {
   return (
      <>
         <section className="relative block h-[30vh]">
            <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
            <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
         </section>
         <section className="relative bg-white py-16 mb-10">
            <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
               <div className="container mx-auto">
                  <Card>
                     <CardHeader className='p-5 text-xl font-bold'>
                        What are Components?
                     </CardHeader>
                     <CardBody className='p-3'>
                        These elements are ready built and flexible to help you create any page you want using them They are copy & paste created. So it's easy to create your own page.
                     </CardBody>
                  </Card>
               </div>
            </div>
         </section>

         
         <section className="relative bg-white py-16">
            <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
               <div className="container mx-auto">
                  <a 
                     href="#"
                     >
                     <Card className="mt-1">  
                        <CardBody className='p-3'>
                           <Typography variant="h6" color="blue-gray" className='font-normal'>
                              Accordion
                           </Typography>
                           <Typography variant='small' className='font-bold text-gray-400 text-xs'>
                              This component support by material tailwind
                           </Typography>
                        </CardBody>
                     </Card>
                  </a>
                  <Card className="mt-1">  
                     <CardBody className='p-3'>
                        <Typography variant="h6" color="blue-gray" className='font-normal'>
                           Alerts
                        </Typography>
                        <Typography variant='small' className='font-bold text-gray-400 text-xs'>
                           This component support by material tailwind
                        </Typography>
                     </CardBody>
                  </Card>
                  <Card className="mt-1">  
                     <CardBody className='p-3'>
                        <Typography variant="h6" color="blue-gray" className='font-normal'>
                           Button
                        </Typography>
                        <Typography variant='small' className='font-bold text-gray-400 text-xs'>
                           This component support by material tailwind
                        </Typography>
                     </CardBody>
                  </Card>
                  <Card className="mt-1">  
                     <CardBody className='p-3'>
                        <Typography variant="h6" color="blue-gray" className='font-normal'>
                           Breadcrumbs
                        </Typography>
                        <Typography variant='small' className='font-bold text-gray-400 text-xs'>
                           This component support by material tailwind
                        </Typography>
                     </CardBody>
                  </Card>
                  <Card className="mt-1">  
                     <CardBody className='p-3'>
                        <Typography variant="h6" color="blue-gray" className='font-normal'>
                           Cards - Content
                        </Typography>
                        <Typography variant='small' className='font-bold text-gray-400 text-xs'>
                           This component support by material tailwind
                        </Typography>
                     </CardBody>
                  </Card>
                  <Card className="mt-1">  
                     <CardBody className='p-3'>
                        <Typography variant="h6" color="blue-gray" className='font-normal'>
                           Cards - Captions
                        </Typography>
                        <Typography variant='small' className='font-bold text-gray-400 text-xs'>
                           This component support by material tailwind
                        </Typography>
                     </CardBody>
                  </Card>
                  <Card className="mt-1">  
                     <CardBody className='p-3'>
                        <Typography variant="h6" color="blue-gray" className='font-normal'>
                           Columns
                        </Typography>
                        <Typography variant='small' className='font-bold text-gray-400 text-xs'>
                           This component support by material tailwind
                        </Typography>
                     </CardBody>
                  </Card>
                  <Card className="mt-1">  
                     <CardBody className='p-3'>
                        <Typography variant="h6" color="blue-gray" className='font-normal'>
                           Component Collapse
                        </Typography>
                        <Typography variant='small' className='font-bold text-gray-400 text-xs'>
                           This component support by material tailwind
                        </Typography>
                     </CardBody>
                  </Card>
                  <Card className="mt-1">  
                     <CardBody className='p-3'>
                        <Typography variant="h6" color="blue-gray" className='font-normal'>
                           Dividers
                        </Typography>
                        <Typography variant='small' className='font-bold text-gray-400 text-xs'>
                           This component support by material tailwind
                        </Typography>
                     </CardBody>
                  </Card>
                  <Card className="mt-1">  
                     <CardBody className='p-3'>
                        <Typography variant="h6" color="blue-gray" className='font-normal'>
                           Form
                        </Typography>
                        <Typography variant='small' className='font-bold text-gray-400 text-xs'>
                           This component support by material tailwind
                        </Typography>
                     </CardBody>
                  </Card>
                  <Card className="mt-1">  
                     <CardBody className='p-3'>
                        <Typography variant="h6" color="blue-gray" className='font-normal'>
                           Inputs
                        </Typography>
                        <Typography variant='small' className='font-bold text-gray-400 text-xs'>
                           This component support by material tailwind
                        </Typography>
                     </CardBody>
                  </Card>
                  <Card className="mt-1">  
                     <CardBody className='p-3'>
                        <Typography variant="h6" color="blue-gray" className='font-normal'>
                           Icons
                        </Typography>
                        <Typography variant='small' className='font-bold text-gray-400 text-xs'>
                           This component support by material tailwind
                        </Typography>
                     </CardBody>
                  </Card>
                  <Card className="mt-1">  
                     <CardBody className='p-3'>
                        <Typography variant="h6" color="blue-gray" className='font-normal'>
                           Images
                        </Typography>
                        <Typography variant='small' className='font-bold text-gray-400 text-xs'>
                           This component support by material tailwind
                        </Typography>
                     </CardBody>
                  </Card>
                  <Card className="mt-1">  
                     <CardBody className='p-3'>
                        <Typography variant="h6" color="blue-gray" className='font-normal'>
                           Pricing Tables
                        </Typography>
                        <Typography variant='small' className='font-bold text-gray-400 text-xs'>
                           This component support by material tailwind
                        </Typography>
                     </CardBody>
                  </Card>
                  <Card className="mt-1">  
                     <CardBody className='p-3'>
                        <Typography variant="h6" color="blue-gray" className='font-normal'>
                           Tabs
                        </Typography>
                        <Typography variant='small' className='font-bold text-gray-400 text-xs'>
                           This component support by material tailwind
                        </Typography>
                     </CardBody>
                  </Card>
                  <Card className="mt-1">  
                     <CardBody className='p-3'>
                        <Typography variant="h6" color="blue-gray" className='font-normal'>
                           Tables
                        </Typography>
                        <Typography variant='small' className='font-bold text-gray-400 text-xs'>
                           This component support by material tailwind
                        </Typography>
                     </CardBody>
                  </Card>
                  <Card className="mt-1">  
                     <CardBody className='p-3'>
                        <Typography variant="h6" color="blue-gray" className='font-normal'>
                           Toggle
                        </Typography>
                        <Typography variant='small' className='font-bold text-gray-400 text-xs'>
                           This component support by material tailwind
                        </Typography>
                     </CardBody>
                  </Card>
               </div>
            </div>
         </section>

         <div className="bg-white">
         <Footer />
         </div>
      </>
   )
}

export default PageComponents