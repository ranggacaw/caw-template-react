import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Input, Typography } from '@material-tailwind/react'
import React from 'react'

export const CardPage = () => {
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
                Card Components
              </CardHeader>
              <CardBody className='p-3'>
                See below our beautiful Card example that you can use in your React and Tailwind CSS projects. We've also included some Card props that are available.
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-16">
        <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
          <div className="container mx-auto">
            {/* Card with Image Content */}
            <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  UI/UX Review Check
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2 min by
                  walk and near to &quot;Naviglio&quot; where you can enjoy the main
                  night life in Barcelona.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>

            {/* Signin Card */}
            <Card className="mt-16 w-96">
              <CardHeader
                variant="gradient"
                color="gray"
                className="mb-4 grid h-28 place-items-center"
              >
                <Typography variant="h3" color="white">
                  Sign In
                </Typography>
              </CardHeader>
              <CardBody className="flex flex-col gap-4">
                <Input label="Email" size="lg" />
                <Input label="Password" size="lg" />
                <div className="-ml-2.5">
                  <Checkbox label="Remember Me" />
                </div>
              </CardBody>
              <CardFooter className="pt-0">
                <Button variant="gradient" fullWidth>
                  Sign In
                </Button>
                <Typography variant="small" className="mt-6 flex justify-center">
                  Don&apos;t have an account?
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="ml-1 font-bold"
                  >
                    Sign up
                  </Typography>
                </Typography>
              </CardFooter>
            </Card>

            {/* Card Profile */}
            <Card
              shadow={false}
              className="mt-10 relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
              </CardHeader>
              <CardBody className="relative py-14 px-6 md:px-12">
                <Typography
                  variant="h2"
                  color="white"
                  className="mb-6 font-medium leading-[1.5]"
                >
                  How we design and code open-source projects?
                </Typography>
                <Typography variant="h5" className="mb-4 text-gray-400">
                  Tania Andrew
                </Typography>
                <Avatar
                  size="xl"
                  variant="circular"
                  alt="tania andrew"
                  className="border-2 border-white"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
              </CardBody>
            </Card>

            {/* Card with Big Content */}
            <Card className="mt-10 w-full max-w-[48rem] flex-row">
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
              >
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  alt="card-image"
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                  startups
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  Lyft launching cross-platform service this week
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                  Like so many organizations these days, Autodesk is a company in
                  transition. It was until recently a traditional boxed software company
                  selling licenses. Yet its own business model disruption is only part
                  of the story
                </Typography>
                <a href="#" className="inline-block">
                  <Button variant="text" className="flex items-center gap-2">
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </a>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>


    </>
  )
}

export default CardPage
