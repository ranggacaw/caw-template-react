import { Button, Card, CardBody, CardHeader, Input, Typography, IconButton } from '@material-tailwind/react';
import React from 'react'

export const InputPage = () => {
  // input with button
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);
  const [value, setValue] = React.useState(0);

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
                Input Components
              </CardHeader>
              <CardBody className='p-3'>
                Input fields are an essential user interface design element, providing users with the means to enter non-standardized responses. See below our Input component examples. It comes in different styles and colors, so you can adapt it easily to your needs.
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-16 mb-10">
        <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
          <div className="container mx-auto">
            {/* Input Variants */}
            <Card className='border'>
              <h3 className='p-5 font-bold'>Input Variants</h3>
              <CardBody className='flex flex-wrap justify-center items-center mx-auto'>
                <div className="flex w-72 flex-col gap-6">
                  <Input variant="static" label="Static" placeholder="Static" />
                  <Input variant="standard" label="Standard" placeholder="Standard"/>
                  <Input variant="outlined" label="Outlined" placeholder="Outlined"/>
                </div>
              </CardBody>
            </Card>

            {/* Input Colors */}
            <Card className='mt-6 border'>
              <h3 className='p-5 font-bold'>Input Colors</h3>
              <CardBody className='flex flex-wrap justify-center items-center mx-auto'>
                <div className="flex w-72 flex-col gap-6">
                  <Input color="blue" label="Input Blue" />
                  <Input color="purple" label="Input Purple" />
                  <Input color="indigo" label="Input Indigo" />
                  <Input color="teal" label="Input Teal" />
                </div>
              </CardBody>
            </Card>

            {/* Input with Button */}
            <Card className='mt-6 border'>
              <h3 className='p-5 font-bold'>Input with Button</h3>
              <CardBody className='flex flex-wrap justify-center items-center mx-auto'>
                <div className="relative flex w-full max-w-[24rem]">
                  <Input
                    type="email"
                    label="Email Address"
                    value={email}
                    onChange={onChange}
                    className="pr-20"
                    containerProps={{
                      className: "min-w-0",
                    }}
                  />
                  <Button
                    size="sm"
                    color={email ? "gray" : "blue-gray"}
                    disabled={!email}
                    className="!absolute right-1 top-1 rounded"
                  >
                    Invite
                  </Button>
                </div>
              </CardBody>
            </Card>

            {/* Input with Control Button */}
            <Card className='mt-6 border'>
              <h3 className='p-5 font-bold'>Input with Control Button</h3>
              <CardBody className='flex flex-wrap justify-center items-center mx-auto'>
                <div className="w-80">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-1 font-medium"
                  >
                    Select Amount
                  </Typography>
                  <div className="relative w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="absolute left-2.5 top-2.5 h-5 w-5 text-slate-600"
                    >
                      <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"></path>
                    </svg>
                    <Input
                      type="number"
                      value={value}
                      onChange={(e) => setValue(Number(e.target.value))}
                      className="!border-t-blue-gray-200 pl-10 placeholder:text-blue-gray-300 placeholder:opacity-100  focus:!border-t-gray-900 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      containerProps={{
                        className: "min-w-0",
                      }}
                    />
                    <div className="absolute right-1 top-1 flex gap-0.5">
                      <IconButton
                        size="sm"
                        className="rounded"
                        onClick={() => setValue((cur) => (cur === 0 ? 0 : cur - 1))}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="h-4 w-4"
                        >
                          <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                        </svg>
                      </IconButton>
                      <IconButton
                        size="sm"
                        className="rounded"
                        onClick={() => setValue((cur) => cur + 1)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="h-4 w-4"
                        >
                          <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                        </svg>
                      </IconButton>
                    </div>
                  </div>
                  <Typography variant="small" color="gray" className="mt-2 font-normal">
                    Adjust the number using the + and - controls.
                  </Typography>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

export default InputPage;
