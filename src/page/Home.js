import React from "react";
import CarouselNews from '../component/Carousel';
import Galery from '../component/Galery';
import News from '../component/News';

const Home = () => {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="pt-16 relative">
        <CarouselNews />
        {/* Overlay CTA */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              Sekolah Cerdas Bangsa
            </h1>
            <p className="text-sm md:text-lg mb-6">
              Mendidik generasi unggul dengan karakter dan iman
            </p>
            {/* <a
              href="/ppdb"
              className="bg-primary-500 hover:bg-primary-600 px-6 py-3 rounded-full font-semibold shadow-lg transition"
            >
              Daftar Sekarang
            </a> */}
          </div>
        </div>
      </section>

      {/* STATS
      <section className="bg-primary-50 py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {["500+ Siswa", "30+ Guru", "Akreditasi A", "Sejak 2007"].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow">
              <p className="text-primary-600 font-bold text-lg">{item}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* INTRO */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/img/SD.JPG"
              alt="Sekolah"
              className="w-full h-[250px] md:h-[350px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-primary-600">
              Selamat Datang
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Kami sangat menyambut para visitor yang sudah berkunjung ke website kami. Sekolah Cerdas Bangsa merupakan sekolah berbasis Kristen di Bogor dengan TK terakreditasi B dan SD terakreditasi A.
            </p>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="py-12 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-primary-600">
            Berita Kegiatan
          </h2>
          <News />
        </div>
      </section>

      {/* TK SECTION */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden rounded-2xl shadow">
            <img
              src="/img/TK.JPG"
              alt="TK"
              className="w-full h-[250px] md:h-[350px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-600">
              TK CERDAS BANGSA
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Pendidikan anak usia dini berbasis Kristen yang berfokus pada perkembangan kognitif, sosial emosional, dan motorik anak.
            </p>
          </div>
        </div>
      </section>

      {/* SD SECTION */}
      <section className="py-12 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-600">
              SD CERDAS BANGSA
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              SD Cerdas Bangsa berdiri sejak 2007 dengan akreditasi A, bertujuan mencerdaskan kehidupan bangsa melalui pendidikan berkualitas.
            </p>
          </div>

          <div className="order-1 md:order-2 overflow-hidden rounded-2xl shadow">
            <img
              src="/img/SD.JPG"
              alt="SD"
              className="w-full h-[250px] md:h-[350px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-primary-600">
            Gallery
          </h2>
          <Galery />
        </div>
      </section>

      {/* CTA BOTTOM */}
      <section className="bg-primary-500 py-12 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Siap Bergabung Bersama Kami?
        </h2>
        <a
          href="/ppdb"
          className="bg-white text-primary-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition"
        >
          Daftar Sekarang
        </a>
      </section>
    </div>
  );
};

export default Home;