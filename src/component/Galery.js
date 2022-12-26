import React from 'react'

export default function Galery() {
  return (
    <div className='text-center py-12'>
         <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            Galeri Cerdas Bangsa
        </h1>
        <div className="p-4 m-8 flex ">
    <picture className=" rounded-lg overflow-hidden block mr-7">
      <img alt=''
        className="hover:scale-125 ease-in duration-150"
        src="img/CHAPELPAGI.JPG"
      /> 
      
    </picture>
    <picture className=" rounded-lg overflow-hidden block mr-7">
      <img alt=''
        className="hover:scale-125 ease-in duration-150"
        src="img/SAINSAREA.JPG"
      /> 
      
    </picture>
    <picture className=" rounded-lg overflow-hidden block mr-7">
      <img alt=''
        className="hover:scale-125 ease-in duration-150"
        src="img/SD.JPG"
      /> 
      
    </picture>
    <picture className=" rounded-lg overflow-hidden block mr-7">
      <img alt=''
        className="hover:scale-125 ease-in duration-150"
        src="img/UPACARABENDERA.JPG"
      /> 
      
    </picture>

   
  </div>
  </div>
  )
}
