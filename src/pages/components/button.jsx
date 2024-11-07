import { Button, Card, CardBody, CardHeader } from '@material-tailwind/react';
import React from 'react'

export const ButtonPage = () => {
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
                    Buttons Components
                  </CardHeader>
                  <CardBody className='p-3'>
                  We've created an incredible array of buttons, that you can customize in any way you need with douzine of colors, shadows, borders and sizes.
                  </CardBody>
              </Card>
            </div>
        </div>
      </section>

      <section className="relative bg-white py-16">
        <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
          <div className="container mx-auto">
            {/* Button Variants */}
            <Card className='mb-6'>
              <CardBody>
                <h4 className='font-bold'>Button Variants</h4>
                <p className='mb-6 text-sm'>The Button component comes with 4 different variants that you can change it using the variant prop.</p>

                <div className="w-full">
                  <Button className='mr-1' variant="filled">filled</Button>
                  <Button className='mr-1' variant="gradient">gradient</Button>
                  <Button className='mr-1' variant="outlined">outlined</Button>
                  <Button className='mr-1' variant="text">text</Button>
                </div>
              </CardBody>
            </Card>

            {/* Button Size */}
            <Card className='mb-6'>
              <CardBody>
                <h4 className='font-bold'>Button Size</h4>
                <p className='mb-6 text-sm'>The Button component comes with 3 different sizes that you can change it using the size prop.</p>

                <div className="flex w-max items-end gap-4">
                  <Button size="sm">small</Button>
                  <Button size="md">medium</Button>
                  <Button size="lg">large</Button>
                </div>
              </CardBody>
            </Card>

            {/* Auth Button */}
            <Card className='mb-6'>
              <CardBody>
                <h4 className='font-bold'>Auth Button</h4>
                <p className='mb-6 text-sm'>You can use tailwind css classes with Button to create beautiful buttons for different purposes, below you can use some button examples used for authentication with social media and web 3.</p>

                <div className="flex flex-col items-center gap-4">
                  <Button size="lg" color="white" className="flex items-center gap-3">
                    <i class="fab fa-github text-xl leading-none opacity-80" aria-hidden="true"></i>
                    Login with Github
                  </Button>
                  <Button
                    size="lg"
                    variant="outlined"
                    color="blue-gray"
                    className="flex items-center gap-3"
                  >
                    <img src="https://docs.material-tailwind.com/icons/google.svg" alt="metamask" className="h-5 w-5" />
                    Continue with Google
                  </Button>
                  <Button
                    size="lg"
                    variant="gradient"
                    color="light-blue"
                    className="group relative flex items-center gap-3 overflow-hidden pr-[72px]"
                  >
                    Sign in with Twitter
                    <span className="absolute right-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
                      <img src="https://docs.material-tailwind.com/icons/twitter.svg" alt="metamask" className="h-5 w-5" />
                    </span>
                  </Button>
                </div>
              </CardBody>
            </Card>

            {/* Button Colors */}
            {/* type color =
            | "white"
            | "black"
            | "blue-gray"
            | "gray"
            | "brown"
            | "deep-orange"
            | "orange"
            | "amber"
            | "yellow"
            | "lime"
            | "light-green"
            | "green"
            | "teal"
            | "cyan"
            | "light-blue"
            | "blue"
            | "indigo"
            | "deep-purple"
            | "purple"
            | "pink"
            | "red"; */}
            <Card className='mb-6'>
              <CardBody>
                <h4 className='font-bold'>Button Colors with Outlined Variant</h4>
                <p className='mb-6 text-sm'>The Button component comes with 19 different colors that you can change it using the color prop.</p>

                <div className="w-full flex-wrap gap-2 flex">
                  <Button variant='outlined' color="blue">color blue</Button>
                  <Button variant='outlined' color="red">color red</Button>
                  <Button variant='outlined' color="green">color green</Button>
                  <Button variant='outlined' color="amber">color amber</Button>
                  <Button variant='outlined' color="pink">color pink</Button>
                  <Button variant='outlined' color="blue-gray">color gray</Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

export default ButtonPage;
