import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react'
import React from 'react'

export const ImagePage = () => {
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
                Image Components
              </CardHeader>
              <CardBody className='p-3'>
                All images in our items are preloaded, to increase the speed of loading even more. But we also have some awesome effects. Any image size or caption box can be used.
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-16 mb-10">
        <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
          <div className="container mx-auto">
            <figure className="relative h-96 w-full">
              <img
                className="h-full w-full rounded-xl object-cover object-center"
                src="https://img.freepik.com/free-photo/dark-fantasy-scene_23-2151136124.jpg"
                alt="nature image"
              />
              <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-gray-600 bg-gray-600 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                <div>
                  <Typography variant="h5" color="black">
                    Yamal Black
                  </Typography>
                  <Typography color="blue-gray" className="mt-2 font-normal">
                    20 July 2024
                  </Typography>
                </div>
                <Typography variant="h5" color="black">
                  Barcelona
                </Typography>
              </figcaption>
            </figure>

            <figure className="mt-6 relative h-52 w-full">
              <img
                className="h-full w-full rounded-xl object-cover object-center hover:blur-sm duration-200"
                src="https://img.freepik.com/free-photo/dark-scene-crow-nature_23-2151370443.jpg"
                alt="nature image"
              />
              <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                <div>
                  <Typography variant="h5" color="blue-gray">
                    Blurry Crow
                  </Typography>
                </div>
                <Typography variant="h5" color="blue-gray">
                  Blurry
                </Typography>
              </figcaption>
            </figure>

            <figure className="mt-6 relative h-52 w-full overflow-hidden rounded-xl">
              <img
                className="h-full w-full rounded-xl object-cover object-center transition-transform duration-500 hover:scale-110"
                src="https://media.istockphoto.com/id/1179346110/photo/the-dwelling-the-place-has-it-own-devil-monster-in-haunted-house-3d-illustration.jpg?b=1&s=612x612&w=0&k=20&c=735qrhexjqR1tlRGfmFPRLoAJZMWoglpl2xciVslNQ8="
                alt="nature image"
              />
              <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between py-4 px-6 shadow-lg backdrop-blur-sm bg-black bg-opacity-30 rounded-xl">
                <div>
                  <Typography color="white" className="mt-2 font-normal">
                    Small Notes
                  </Typography>
                  <Typography className="mt-2 font-normal text-xs text-gray-500">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  </Typography>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      

    </>
  )
}

export default ImagePage