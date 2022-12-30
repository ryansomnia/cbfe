import React from 'react'

export default function Galery() {
  return (
    // <div className='text-center py-12'>
    //   <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
    //     Galeri Cerdas Bangsa
    //   </h1>
    //   <div className="p-4 m-8 flex">
    //     <picture className=" rounded-lg overflow-hidden block mr-7">
    //       <img alt=''
    //         className="hover:scale-125 ease-in duration-150"
    //         src="img/CHAPELPAGI.JPG"
    //       />
    //     </picture>
    //     <picture className=" rounded-lg overflow-hidden block mr-7">
    //       <img alt=''
    //         className="hover:scale-125 ease-in duration-150"
    //         src="img/SAINSAREA.JPG"
    //       />
    //     </picture>
    //     <picture className=" rounded-lg overflow-hidden block mr-7">
    //       <img alt=''
    //         className="hover:scale-125 ease-in duration-150"
    //         src="img/SD.JPG"
    //       />
    //     </picture>
    //     <picture className=" rounded-lg overflow-hidden block mr-7">
    //       <img alt=''
    //         className="hover:scale-125 ease-in duration-150"
    //         src="img/UPACARABENDERA.JPG"
    //       />
    //     </picture>
    //   </div>
    // </div>

    <section class="overflow-hidden text-gray-700 pt-3">
      <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
        <div class="flex flex-wrap -m-1 md:-m-2">
          <div class="flex flex-wrap w-1/2">
            <div class="w-1/2 p-1 md:p-2">
              <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
            </div>
            <div class="w-full p-1 md:p-2">
              <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="w-full p-1 md:p-2">
              <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
