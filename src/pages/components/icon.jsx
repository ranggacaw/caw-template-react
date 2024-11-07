import { Card, CardBody, CardHeader, IconButton } from '@material-tailwind/react'
import React from 'react'

export const IconPage = () => {
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
                Icon Button Components
              </CardHeader>
              <CardBody className='p-3'>
                Icons are essential for your pages, so we've created a very easy way of creating an infinite amount of variations.
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="relative bg-white py-16 mb-10">
        <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
          <div className="container mx-auto">
            {/* Icon Button Variants */}
            <Card className='border'>
              <h3 className='p-5 font-bold'>Icon Button Variants</h3>
              <CardBody className='flex flex-wrap justify-center items-center mx-auto'>
                <div className="flex gap-4">
                  <IconButton>
                    <i className="fas fa-heart" />
                  </IconButton>
                  <IconButton variant="gradient">
                    <i className="fas fa-heart" />
                  </IconButton>
                  <IconButton variant="outlined">
                    <i className="fas fa-heart" />
                  </IconButton>
                  <IconButton variant="text">
                    <i className="fas fa-heart" />
                  </IconButton>
                </div>
              </CardBody>
            </Card>

            {/* Icon Button Size */}
            <Card className='border'>
              <h3 className='p-5 font-bold'>Icon Button Size</h3>
              <CardBody className='flex flex-wrap justify-center items-center mx-auto'>
                <div className="flex items-end gap-4">
                  <IconButton size="sm">
                    <i className="fas fa-heart" />
                  </IconButton>
                  <IconButton size="md">
                    <i className="fas fa-heart" />
                  </IconButton>
                  <IconButton size="lg">
                    <i className="fas fa-heart fa-lg" />
                  </IconButton>
                </div>
              </CardBody>
            </Card>

            {/* Icon Button with Custom Style */}
            <Card className='border'>
              <h3 className='p-5 font-bold'>Icon Button with Custom Style</h3>
              <CardBody className='flex flex-wrap justify-center items-center mx-auto'>
                <div className="flex gap-4">
                  <IconButton className="rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
                    <i className="fab fa-google text-lg" />
                  </IconButton>
                  <IconButton className="rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
                    <i className="fab fa-twitter text-lg" />
                  </IconButton>
                  <IconButton className="rounded bg-[#ea4c89] hover:shadow-[#ea4c89]/20 focus:shadow-[#ea4c89]/20 active:shadow-[#ea4c89]/10">
                    <i className="fab fa-dribbble text-lg" />
                  </IconButton>
                  <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
                    <i className="fab fa-github text-lg" />
                  </IconButton>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

export default IconPage
