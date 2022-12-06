// import Navbar from '../component/Navbar'
// import Navbarr from '../component/Navbarr'
// import Product from '../component/Product'
// import News from '../component/News'
// import Tk from './Tk'
// import Sd from './Sd'
// import Form from '../component/Form'
import Footer from '../component/Footer'
// import CarouselNews from '../component/Carousel'
import Napbar from '../component/Napbar'
import CarouselNews from '../component/Carousel'
import './Home.css'
import React from "react";
import News from '../component/News';

const Home = () => {

  return (
    <div>
     <Napbar/>
     <CarouselNews/>
     <div className="flex flex-col">
  
      <section className='bg-gray-800 overflow-hidden mt-5'>
      <div id="sejarah" className=" mx-12 flex flex-col lg:flex-row justify-between gap-8 ">
        <div className="w-full lg:w-6/12 pb-12">
                  <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
              </div>
              <div className="w-full lg:w-5/12 flex flex-col justify-center">
                  <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-white pb-4">Selamat Datang </h1>
                  <p className="font-normal text-base leading-6 text-white ">Kami sangat menyambut para visitor yang sudah mau berkunjung ke website kami.
          <br/>Pertama tama kami mau memperkenalkan Sekolah Kristen Cerdas Bangsa yang berdomisili di Bogor dengan TK yang TERAKREDITASI B dan SD yang TERAKREDITASI A.
          </p>
              </div>
             
          </div>
          </section>
      <News/>
        <div id="sejarah" className="mx-12 flex flex-col lg:flex-row justify-between gap-8 ">
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
      
      </div>
     <Footer/>
    </div>
  )
}

export default Home
