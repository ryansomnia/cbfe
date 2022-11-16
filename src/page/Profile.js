import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
export default function Profile() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className=" overflow-hidden bg-white">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
               Sekilas tentang Yayasan
              </h1>
              <p className="mt-4 text-xl text-gray-500">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                     <div className="w-full  ">
                <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
            </div>
                    </div>
                  </div>
                </div>
  
                
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="mx-12 flex flex-col lg:flex-row justify-between gap-8 ">
      <div className="w-full lg:w-6/12 ">
                <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
            </div>
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
                <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Sejarah</h1>
                <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
            </div>
           
        </div>
        <section className="pt-24 pb-36 bg-gray-800 overflow-hidden mt-5">
        <div className="container px-4 mx-auto">
            <h2 className="mb-4 text-6xl md:text-5xl text-center font-bold font-heading font-heading tracking-px-n leading-tight text-white">Struktur Organisasi</h2>
            <p className="mb-24 font-medium text-white text-center leading-relaxed md:max-w-lg mx-auto">Lorem ipsum dolor sit amet, to the consectr adipiscing elit. Volutpat tempor to the condimentum vitae vel purus.</p>
            <div className="flex flex-wrap mb-10">
        <div className="bg-white h-44 w-44 rounded-full ml-7"></div>
        <div className="bg-white h-44 w-44 rounded-full ml-7"></div>
        <div className="bg-white h-44 w-44 rounded-full ml-7"></div>
            </div>
            <div className="flex flex-wrap mb-10">
        <div className="bg-white h-44 w-44 rounded-full ml-7"></div>
        <div className="bg-white h-44 w-44 rounded-full ml-7"></div>
        <div className="bg-white h-44 w-44 rounded-full ml-7"></div>
            </div>
        </div>
        </section>
       
      <Footer/>
    </div>
  );
}
