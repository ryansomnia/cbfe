import React from 'react'
import Footer from '../component/Footer'
import Napbar from '../component/Napbar'
export default function Sd() {
    return (
      <div>
           <Napbar/>
           <section className='bg-white overflow-hidden'>
      <div id="sejarah" className=" mx-12 flex flex-col lg:flex-row justify-between gap-8 ">
        <div className="w-full lg:w-6/12 pb-12">
                  <img className="w-full h-full" src="img/TK.JPG" alt="A group of People" />
              </div>
              <div className="w-full lg:w-5/12 flex flex-col justify-center">
                  <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-2">Visi </h1>
                  <p className="font-normal text-base leading-6 text-gray-800 ">Membangun generasi yang beriman, berkarakter, cerdas dan berkharisma </p>
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-2 mt-5 ">Misi </h1>
          <ul className='list-disc'>
              <li> Meningkatkan rasa cinta kepada Tuhan, diri sendiri dan sesama</li>
              <li>Menjadikan generasi yang berkarakter</li>
              <li>Menumbuhkembangkan kreatifitas, imajinasi dan kognitif</li>
              <li>Menghasilkan generasi yang senantiasa memancarkan kemuliaan Tuhan</li>

            </ul> 
              </div>
             
          </div>
          <div id="sejarah" className="mx-12 flex flex-col lg:flex-row justify-between gap-8 ">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
                <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Tujuan TK Cerdas Bangsa</h1>
                <ul className='list-disc'>
              <li>Menghasilkan peserta didik yang berkarakter</li>
              <li>Menghasilkan peserta didik yang mengenal bidang sains</li>
              <li>Menghasilkan peserta didik yang mencintai dan menyukai bahasa inggris secara lisan</li>
              <li>Menghasilkan peserta didik yang berani tampil</li>
             <li>Menghasilkan peserta didik yang suka membaca dan berhitung dengan standar tingkat perkembangan</li>


            </ul> 
            </div>
            <div className="w-full lg:w-6/12 ">
                  <img className="w-full h-full" src="/img/SD.JPG" alt="A group of People" />
            </div>
        </div>
        <div id="sejarah" className=" mx-12 flex flex-col lg:flex-row justify-between gap-8 ">
        <div className="w-full lg:w-6/12 pb-12">
                  <img className="w-full h-full" src="img/TK.JPG" alt="A group of People" />
              </div>
              <div className="w-full lg:w-5/12 flex flex-col justify-center">
                  <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-2">Sejarah Singkat TK Cerdas Bangsa </h1>
                  <p className="font-normal text-base leading-6 text-gray-800 ">Membangun generasi yang beriman, berkarakter, cerdas dan berkharisma </p>
          
              </div>
             
          </div>
          </section>
        
        <Footer/>
      </div>
    )
  }
  