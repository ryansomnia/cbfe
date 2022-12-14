
import Footer from '../component/Footer'
import Napbar from '../component/Napbar'
import CarouselNews from '../component/Carousel'
import './Home.css'
import React from "react";
import News from '../component/News';
// import Youtube from '../component/Youtube';

const Home = () => {

  return (
    <div>
     <Napbar/>
     <CarouselNews/>
     <div className="flex flex-col">
  
      <section className='bg-green overflow-hidden mt-5'>
      <div id="sejarah" className=" mx-12 flex flex-col lg:flex-row justify-between gap-8 ">
        <div className="w-full lg:w-6/12 pb-12">
                  <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
              </div>
              <div className="w-full lg:w-5/12 flex flex-col justify-center">
                  <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-white pb-4">Selamat Datang </h1>
                  <p className="font-normal text-base leading-6 text-white ">Kami sangat menyambut para visitor yang sudah mau berkunjung ke website kami.
         Pertama tama kami mau memperkenalkan Sekolah Kristen Cerdas Bangsa yang berdomisili di Bogor dengan TK yang TERAKREDITASI B dan SD yang TERAKREDITASI A.
          </p>
              </div>
             
          </div>
          </section>
        <News/>
        <div id="sejarah" className="mx-12 flex flex-col lg:flex-row justify-between gap-8 ">
            <div className="w-full lg:w-6/12 ">
                  <img className="w-full h-full" src="/img/TK.JPG" alt="A group of People" />
            </div>
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
                <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">TK CERDAS BANGSA</h1>
                <p className="font-normal text-base leading-6 text-gray-600 ">TK Cerdas Bangsa adalah pendidikan yang berbasis anak usia dini dengan dasar agama Kristen yang bertujuan untuk mendidik karakter anak - anak sejak usia dini, dengan fokus pengajaran kepada pengembangan kognitif, sosial emosional, fisik motorik dan materi pengetahuan lain yang disesuaikan dengan usia dini dan dikembangkan oleh guru - guru TK Cerdas Bangsa yang telah berpengalaman di bidangnya.</p>
            </div>
             
        </div>
        <div id="sejarah" className="mx-12 flex flex-col lg:flex-row justify-between gap-8 ">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
                <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">SD CERDAS BANGSA</h1>
                <p className="font-normal text-base leading-6 text-gray-600 "> SD Cerdas bangsa, 
SD Cerdas Bangsa didirikan Pada tanggal 01 Juli 2007, berdasarkan izin diknas Kabupaten Bogor Nomor : 421.2/243-Disdik/2010. Dengan Akreditasi A. Dan didirikan oleh Bapak Hendrawan. Tujuan didirikannya SD Cerdas Bangsa ini adalah untuk ikut berperan aktif mencerdaskan kehidupan bangsa dan negara khususnya di bidang pendidikan. Serta memajukan Desa cimandala dengan sarana pendidikan Sekolah Dasar. 
</p>
            </div>
            <div className="w-full lg:w-6/12 ">
                  <img className="w-full h-full" src="/img/SD.JPG" alt="A group of People" />
            </div>
        </div>
          {/* <Youtube/> */}
          




      
      </div>
     <Footer/>
    </div>
  )
}

export default Home
