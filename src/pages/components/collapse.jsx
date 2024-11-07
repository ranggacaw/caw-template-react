import { AcademicCapIcon, ArchiveBoxArrowDownIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/solid';
import { Accordion, AccordionBody, AccordionHeader, Card, CardBody, CardHeader } from '@material-tailwind/react';
import React from 'react'

// Classic Accordion With Icon
function Icon({ id, opeen }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === opeen ? "rotate-180" : ""} h-5 transition-transform w-2.5`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export const CollapsePage = () => {
  
  // Classic Accordion With Icon
  const [opeen, setOpeen] = React.useState(1);
  const handleOpeen = (value) => setOpeen(opeen === value ? 0 : value);

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

      <section className="relative bg-white py-16">
        <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
          <div className="container mx-auto">
            {/* Classic Accordion With Icon */}
            <Card>
              <CardBody>
                <h4 className='font-bold'>Classic Accordion With Icon</h4>
                <p className='mb-6 text-sm'>Simple accordions, you can use them with or without icons, it's incredibly simple.</p>

                <Accordion open={opeen === 1} icon={<Icon id={1} opeen={opeen} />}>
                  <AccordionHeader onClick={() => handleOpeen(1)} className='text-sm text-left'>
                    What is Material Tailwind?</AccordionHeader>
                  <AccordionBody>
                    <ul>
                      <li className='flex pl-5 mb-3'>
                        <AcademicCapIcon className='w-4 text-gray-800 mr-2'/> 
                        Academic Cap Icon
                      </li>
                      <li className='flex pl-5 mb-3'>
                        <ArchiveBoxArrowDownIcon className='w-4 text-gray-800 mr-2'/> 
                        Archieve Box Arrow Down Icon
                      </li>
                      <li className='flex pl-5 mb-3'>
                        <ArrowsPointingOutIcon className='w-4 text-gray-800 mr-2'/> 
                        Arrows Pointing Out Icon
                      </li>
                    </ul>
                  </AccordionBody>
                </Accordion>
              </CardBody>
            </Card>

            <Card className='mt-6'>
              <CardBody>
                <Accordion open={opeen === 2} icon={<Icon id={2} opeen={opeen} />}>
                  <AccordionHeader onClick={() => handleOpeen(2)} className='text-sm text-white hover:text-gray-300 px-4 bg-blue-gray-800 rounded-xl'>
                    How to use Material Tailwind?
                  </AccordionHeader>
                  <AccordionBody>
                    <ul>
                      <li className='flex pl-5 mb-3'>
                        <AcademicCapIcon className='w-4 text-gray-800 mr-2'/> 
                        Academic Cap Icon
                      </li>
                      <li className='flex pl-5 mb-3'>
                        <ArchiveBoxArrowDownIcon className='w-4 text-gray-800 mr-2'/> 
                        Archieve Box Arrow Down Icon
                      </li>
                      <li className='flex pl-5 mb-3'>
                        <ArrowsPointingOutIcon className='w-4 text-gray-800 mr-2'/> 
                        Arrows Pointing Out Icon
                      </li>
                    </ul>
                  </AccordionBody>
                </Accordion>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

    </>
  )
}

export default CollapsePage;
