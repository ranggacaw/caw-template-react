import { Button, Card, CardBody, CardHeader, Checkbox, Input, Typography } from '@material-tailwind/react'
import React from 'react'

export const FormPage = () => {

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
                  Form Components
                </CardHeader>
                <CardBody className='p-3'>
                  Forms are essential user interface design element, providing users with the means to enter non-standardized responses. See below our form component examples.
                </CardBody>
              </Card>
            </div>
          </div>
        </section>

        <section className="relative bg-white py-16">
          <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
            <div className="container mx-auto">
              <Card color="transparent">
                <CardBody className='flex flex-wrap justify-center items-center mx-auto'>
                  <Typography variant="h4" color="blue-gray">
                    Sign Up
                  </Typography>
                  <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to register.
                  </Typography>
                  <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                      <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Name
                      </Typography>
                      <Input
                        size="lg"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                      <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Email
                      </Typography>
                      <Input
                        size="lg"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                      <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Password
                      </Typography>
                      <Input
                        type="password"
                        size="lg"
                        placeholder="********"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                    </div>
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal"
                        >
                          I agree the
                          <a
                            href="#"
                            className="font-medium transition-colors hover:text-gray-900"
                          >
                            &nbsp;Terms and Conditions
                          </a>
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5" }}
                    />
                    <Button className="mt-6" fullWidth>
                      sign up
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                      Already have an account?{" "}
                      <a href="#" className="font-medium text-gray-900">
                        Sign In
                      </a>
                    </Typography>
                  </form>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>
    </>
  )
}

export default FormPage
