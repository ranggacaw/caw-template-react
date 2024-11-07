import { Accordion, AccordionBody, AccordionHeader, Card, CardBody, CardHeader } from '@material-tailwind/react'
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
      className={`${id === opeen ? "rotate-180" : ""} h-5 w-5 transition-transform w-2.5`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export const AccordionPage = () => {
  // Classic Accordion
  const [open, setOpen] = React.useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

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
                    Accordions Components
                  </CardHeader>
                  <CardBody className='p-3'>
                    Simplify your content delivery. Infinite possibilities, all choices you may want from a accordion. We have em all, and highly customizable.
                  </CardBody>
              </Card>
            </div>
        </div>
      </section>

      <section className="relative bg-white py-16">
        <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
          <div className="container mx-auto">
          {/* Classic Accordion */}
            <Card className='mb-6'>
              <CardBody>
                <h4 className='font-bold'>Classic Accordion</h4>
                <p className='mb-6 text-sm'>Simple accordions, you can use them with or without icons, it's incredibly simple.</p>

                <Accordion open={open === 1}>
                  <AccordionHeader onClick={() => handleOpen(1)} className='text-sm'>What is Material Tailwind?</AccordionHeader>
                  <AccordionBody>
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 2}>
                  <AccordionHeader onClick={() => handleOpen(2)} className='text-sm'>
                    How to use Material Tailwind?
                  </AccordionHeader>
                  <AccordionBody>
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 3}>
                  <AccordionHeader onClick={() => handleOpen(3)} className='text-sm'>
                    What can I do with Material Tailwind?
                  </AccordionHeader>
                  <AccordionBody>
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                  </AccordionBody>
                </Accordion>
              </CardBody>
            </Card>

            {/* Classic Accordion With Icon */}
            <Card>
              <CardBody>
                <h4 className='font-bold'>Classic Accordion With Icon</h4>
                <p className='mb-6 text-sm'>Simple accordions, you can use them with or without icons, it's incredibly simple.</p>

                <Accordion open={opeen === 1} icon={<Icon id={1} opeen={opeen} />}>
                  <AccordionHeader onClick={() => handleOpeen(1)} className='text-sm'>What is Material Tailwind?</AccordionHeader>
                  <AccordionBody>
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                  </AccordionBody>
                </Accordion>
                <Accordion open={opeen === 2} icon={<Icon id={2} opeen={opeen} />}>
                  <AccordionHeader onClick={() => handleOpeen(2)} className='text-sm'>
                    How to use Material Tailwind?
                  </AccordionHeader>
                  <AccordionBody>
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                  </AccordionBody>
                </Accordion>
                <Accordion open={opeen === 3} icon={<Icon id={3} opeen={opeen} />}>
                  <AccordionHeader onClick={() => handleOpeen(3)} className='text-sm'>
                    What can I do with Material Tailwind?
                  </AccordionHeader>
                  <AccordionBody>
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
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

export default AccordionPage