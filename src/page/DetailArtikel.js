import React from 'react'

import Napbar from './../component/Napbar'
import Footer from '../component/Footer'
export default function DetailArtikel() {
  return (
    <div>
        <Napbar/>
        <section className="pt-3 pb-36  overflow-hidden mt-5">
      <div className="container px-4 py-2 mx-auto">
          <h2 className="mb-4 text-6xl md:text-5xl text-center font-bold font-heading font-heading tracking-px-n leading-tight text-gray-800">BERITA SEKOLAH</h2>
          <p className=" font-medium text-gray-800 text-center leading-relaxed md:max-w-lg mx-auto">10 December 2022</p>
          <div className='bg-black w-1/2 h-96 mx-auto' >
            <h1 className='text-white'> ini gambar</h1>
          </div>

          <div className='bg-black w-auto h-96 mx-auto mt-6' >
            <h1 className='text-white'> ini isi</h1>
          </div>
         
      </div>
      </section>
        <Footer/>
        </div>
  )
}
