import React from 'react'
import Footer from '../component/Footer'
import Napbar from '../component/Napbar'
// import Footer from '../component/Footer'

export default function Tk() {
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

          <section class="text-gray-600 body-font">
            <div class="container px-5 mx-auto">
                <div class="text-center mb-10">
                <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Struktur Organisasi</h1>
                <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Berikut Struktur Organisasi dari TK Cerdas Bangsa</p>
                <div class="flex mt-6 justify-center">
                    <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
                </div>
                <div class="p-4 flex flex-col text-center items-center">
                        <div className="bg-indigo-100 h-44 w-44 rounded-full  inline-flex items-center justify-center flex-shrink-0"></div>
                        <h4 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Hendrawan</h4>
                        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Kepala Yayasan</p>
                    </div>

                <div class="p-4 flex flex-col text-center items-center">
                        <div className="bg-indigo-100 h-44 w-44 rounded-full  inline-flex items-center justify-center flex-shrink-0"></div>
                        <h4 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Erly</h4>
                        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Sekretaris Yayasan</p>
                    </div>
                <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
               
                  
                    <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="bg-indigo-100 h-44 w-44 rounded-full  inline-flex items-center justify-center flex-shrink-0">
                          <img className='h-44 w-44 rounded-full' src='/img/gurutk1.png' alt=''></img>
                        </div>
                        <h4 class="sm:text-xl text-2xl font-medium title-font text-gray-900">Nama</h4>
                        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Jabatan</p>
                    </div>
                    <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="bg-indigo-100 h-44 w-44 rounded-full  inline-flex items-center justify-center flex-shrink-0">
                        <img className='h-44 w-44 rounded-full' src='/img/busondang.png' alt=''></img>
                        </div>
                        <h4 class="sm:text-xl text-2xl font-medium title-font text-gray-900">I. Sondang Aviyanti P. S.Si</h4>
                        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Tata Usaha</p>
                    </div>
                    <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="bg-indigo-100 h-44 w-44 rounded-full  inline-flex items-center justify-center flex-shrink-0">
                        <img className='h-44 w-44 rounded-full' src='/img/gurutk2.png' alt=''></img>
                        </div>
                        <h4 class="sm:text-xl text-2xl font-medium title-font text-gray-900">Nama</h4>
                        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Jabatan</p>
                    </div>
                  
                    
                
                
                </div>
                
            </div>
            </section>
           <Footer/>
      </div>
      
    )
  }
  