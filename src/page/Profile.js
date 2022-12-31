import React from "react";
import Napbar from "../component/Napbar";
import Footer from "../component/Footer";
import Galery from "../component/Galery";
export default function Profile() {
  return (
    <div className="flex flex-col pt-5">
      <div className=" mx-24 my-5 flex flex-col lg:flex-row justify-between gap-8 ">
      
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
                <h1 className="text-4xl  lg:text-4xl font-bold leading-9 text-gray-800 pb-4">SEKILAS TENTANG YAYASAN
</h1>
                <p className="font-normal text-base leading-6 text-gray-600 ">
                Yayasan Cerdas Bangsa Merupakan yayasan yang didirikan oleh Bapak Hendrawan selaku Ketua Yayasan. 
                Yayasan Cerdas Bangsa telah mendirikan TK Cerdas Bangsa pada Tahun 2006 dan SD Cerdas Bangsa pada tahun 2007.
                Yayasan Cerdas  Bangsa Berdomisili di Cibinong Bogor. 

</p>
<p className="font-normal text-base leading-6 text-gray-600 mt-3">
TK Cerdas Bangsa didirikan pada tanggal 25 Juni 2006 berdasarkan izin diknas Kabupaten Bogor No. 421.1/2160-Disdik/2007 Oktober 2008 dengan akreditasi B. 
Sedangkan SD Cerdas Bangsa didirikan Pada tanggal 01 Juli 2007, berdasarkan izin diknas Kabupaten Bogor Nomor : 421.2/243-Disdik/2010. Dengan Akreditasi A.

 </p>
            </div>
            <div className="w-full lg:w-6/12 ">
                <img className="w-full h-full" src="img/gedung.jpeg" alt="A group of People" />
            </div>
           
        </div>
        <div className=" mx-24 my-5 flex flex-col lg:flex-row justify-between gap-8 ">
      <div className="w-full lg:w-6/12 ">
                <img className="w-full h-full" src="img/GEMARMEMBACA.JPG" alt="A group of People" />
            </div>
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
                {/* <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Sejarah</h1> */}
                <p className="font-normal text-base leading-6 text-gray-600 ">
                  Direktur Yayasan setiap tahun memberikan dana beasiswa kepada jemaat yang tidak mampu untuk sekolah di luar. Setiap tahun yang di bantu semakin banyak dan dana yang di butuhkan pun semakin besar. Akhirnya Yayasan memiliki ide bagaimana jika mendirikan sekolah sendiri supaya dana yang cukup besar ini tidak perlu keluar ke sekolah lain. 
</p>
<p className="font-normal text-base leading-6 text-gray-600 mt-3">
  Maka didirikanlah sekolah TK Cerdas Bangsa pada tahun 2006 dibawah naungan Yayasan Cerdas Bangsa yang di ketuai oleh bapak Hendrawan. Setahun berjalan orang tua yang lulus menginginkan anaknya lanjut di Sekolah Dasar dengan Yayasan yang sama. Maka didirikan pula SD Cerdas Bangsa pada tahun 2007.
</p>
            </div>
           
        </div>
        
        
        
        
     <Galery/>
    </div>
  );
}
