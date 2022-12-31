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

    <section className="overflow-hidden text-gray-700 py-3">
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
                src="img/KEGIATANPEMBELAJARANANGKLUNG.JPG"/>
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg hover:scale-125 ease-in-out duration-300"
                src="img/PERPUSTAKAAN.JPG" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
