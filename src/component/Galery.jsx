import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'

export default function Galery() {
  const [isMobile, setIsMobile] = useState(false)

  //choose the screen size 
  const handleResize = () => {
    if (window.innerWidth < 620) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  return (
    <>
      {!isMobile ?
        <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/2 p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg hover:scale-125 ease-in-out duration-300"
                  src="img/CHAPELPAGI.JPG" />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg hover:scale-125 ease-in-out duration-300"
                  src="img/SAINSAREA.JPG" />
              </div>
              <div className="w-full p-1 md:p-2 hover:scale-125 ease-in-out duration-500">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg hover:scale-125 ease-in-out duration-300"
                  src="img/SD.JPG" />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2 ">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg hover:scale-125 ease-in-out duration-300"
                  src="img/UPACARABENDERA.JPG" />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg hover:scale-125 ease-in-out duration-300"
                  src="img/KEGIATANPEMBELAJARANANGKLUNG.JPG" />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg hover:scale-125 ease-in-out duration-300"
                  src="img/PERPUSTAKAAN.JPG" />
              </div>
            </div>
          </div>
        </div>
        :
        <Carousel
          showIndicators={true}
          infiniteLoop={true}
          autoPlay={true}
          showArrows={true}
          autoFocus={true}
          verticalSwipe={'natural'}
          showStatus={false}
          showThumbs={false}
          swipeAnimationHandler={false}
          interval={4000}
          className="pb-5"
        >

          <div className="w-full p-1 md:p-2">
            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg hover:scale-125 ease-in-out duration-300"
              src="img/CHAPELPAGI.JPG" />
          </div>
          <div className="w-full p-1 md:p-2 ">
            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg hover:scale-125 ease-in-out duration-300"
              src="img/SAINSAREA.JPG" />
          </div>
          <div className="w-full p-1 md:p-2 ">
            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg hover:scale-125 ease-in-out duration-300"
              src="img/SD.JPG" />
          </div>
          <div className="w-full p-1 md:p-2 ">
            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg hover:scale-125 ease-in-out duration-300"
              src="img/UPACARABENDERA.JPG" />
          </div>
          <div className="w-full p-1 md:p-2 ">
            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg hover:scale-125 ease-in-out duration-300"
              src="img/KEGIATANPEMBELAJARANANGKLUNG.JPG" />
          </div>
          <div className="w-full p-1 md:p-2">
            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg hover:scale-125 ease-in-out duration-300"
              src="img/PERPUSTAKAAN.JPG" />
          </div>
        </Carousel>
      }
    </>
  )
}
