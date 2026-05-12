import React from "react";
import Galery from "../component/Galery";
import News from "../component/News";
import {
  HiOutlineAcademicCap,
  HiOutlineUserGroup,
  HiOutlineSparkles,
} from "react-icons/hi2";

const Home = () => {
  return (
    <div className="bg-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <img
          src="/img/gedung.jpeg"
          alt="Gedung Sekolah Cerdas Bangsa"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/40" />

        {/* Blur */}
        <div className="absolute inset-0 backdrop-blur-[2px]" />

        {/* Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[7px] text-sky-300 font-semibold mb-6 text-sm">
              Welcome To
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] text-white mb-8">
              Sekolah
              <span className="block text-sky-400">
                Cerdas Bangsa
              </span>
            </h1>

            <p className="text-slate-200 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              Mendidik generasi unggul dengan iman,
              karakter, kreativitas, dan pendidikan
              berkualitas untuk masa depan yang lebih baik.
            </p>

            {/* BUTTON */}
            <div className="flex flex-wrap gap-5">
              <a
                href="/ppdb"
                className="px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white rounded-full font-semibold shadow-2xl transition duration-300 hover:scale-105"
              >
                Daftar Sekarang
              </a>

              <a
                href="/profile"
                className="px-8 py-4 border border-white/30 text-white rounded-full font-semibold hover:bg-white hover:text-slate-900 transition duration-300"
              >
                Lihat Profil
              </a>
            </div>

            {/* STATS */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16"> */}
              {/* {[
                {
                  title: "500+",
                  desc: "Siswa",
                },
                {
                  title: "30+",
                  desc: "Guru",
                },
                {
                  title: "A",
                  desc: "Akreditasi SD",
                },
                {
                  title: "2007",
                  desc: "Didirikan",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5"
                >
                  <h3 className="text-3xl font-black text-white mb-1">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-sm">
                    {item.desc}
                  </p>
                </div>
              ))} */}
            {/* </div> */}
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* INTRO */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* IMAGE */}
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-56 h-56 bg-sky-100 rounded-full blur-3xl opacity-70" />

              <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
                <img
                  src="/img/SD.JPG"
                  alt="Sekolah Cerdas Bangsa"
                  className="w-full h-[550px] object-cover hover:scale-105 transition duration-700"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div>
              <p className="uppercase tracking-[6px] text-sky-500 font-semibold mb-4">
                Tentang Kami
              </p>

              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
                Pendidikan Dengan Karakter & Iman
              </h2>

              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                Sekolah Cerdas Bangsa merupakan sekolah
                berbasis Kristen di Bogor yang menghadirkan
                pendidikan berkualitas dengan pendekatan
                akademik, karakter, dan spiritual.
              </p>

              <p className="text-slate-600 leading-relaxed text-lg mb-10">
                Kami percaya bahwa setiap anak memiliki
                potensi besar untuk berkembang menjadi
                pribadi yang unggul dan berdampak bagi
                masa depan.
              </p>

              {/* FEATURES */}
              <div className="grid sm:grid-cols-3 gap-5">
                <div className="bg-slate-50 rounded-3xl p-6 hover:shadow-xl transition duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center mb-5">
                    <HiOutlineAcademicCap className="text-3xl text-sky-500" />
                  </div>

                  <h3 className="font-bold text-slate-900 mb-2">
                    Akademik
                  </h3>

                  <p className="text-slate-500 text-sm">
                    Kurikulum modern dan berkualitas
                  </p>
                </div>

                <div className="bg-slate-50 rounded-3xl p-6 hover:shadow-xl transition duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center mb-5">
                    <HiOutlineUserGroup className="text-3xl text-sky-500" />
                  </div>

                  <h3 className="font-bold text-slate-900 mb-2">
                    Karakter
                  </h3>

                  <p className="text-slate-500 text-sm">
                    Membentuk pribadi disiplin & peduli
                  </p>
                </div>

                <div className="bg-slate-50 rounded-3xl p-6 hover:shadow-xl transition duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center mb-5">
                    <HiOutlineSparkles className="text-3xl text-sky-500" />
                  </div>

                  <h3 className="font-bold text-slate-900 mb-2">
                    Kreativitas
                  </h3>

                  <p className="text-slate-500 text-sm">
                    Mengembangkan potensi anak
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-100 rounded-full blur-3xl opacity-40" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[6px] text-sky-500 font-semibold mb-4">
              News
            </p>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5">
              Berita & Kegiatan
            </h2>

            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Informasi terbaru mengenai kegiatan dan
              aktivitas siswa di Sekolah Cerdas Bangsa.
            </p>
          </div>

          <News />
        </div>
      </section>

      {/* TK */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* IMAGE */}
            <div className="overflow-hidden rounded-[32px] shadow-2xl">
              <img
                src="/img/TK.JPG"
                alt="TK Cerdas Bangsa"
                className="w-full h-[550px] object-cover hover:scale-105 transition duration-700"
              />
            </div>

            {/* CONTENT */}
            <div>
              <p className="uppercase tracking-[6px] text-sky-500 font-semibold mb-4">
                TK Cerdas Bangsa
              </p>

              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
                Pendidikan Anak Usia Dini
              </h2>

              <p className="text-slate-600 leading-relaxed text-lg">
                Pendidikan anak usia dini berbasis Kristen
                yang berfokus pada perkembangan kognitif,
                sosial emosional, kreativitas, dan motorik
                anak dalam lingkungan yang nyaman dan
                menyenangkan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SD */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* CONTENT */}
            <div className="order-2 lg:order-1">
              <p className="uppercase tracking-[6px] text-sky-500 font-semibold mb-4">
                SD Cerdas Bangsa
              </p>

              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
                Pendidikan Dasar Berkualitas
              </h2>

              <p className="text-slate-600 leading-relaxed text-lg">
                Berdiri sejak tahun 2007 dengan akreditasi A,
                SD Cerdas Bangsa berkomitmen memberikan
                pendidikan terbaik untuk membentuk generasi
                yang unggul secara akademik maupun karakter.
              </p>
            </div>

            {/* IMAGE */}
            <div className="order-1 lg:order-2 overflow-hidden rounded-[32px] shadow-2xl">
              <img
                src="/img/SD.JPG"
                alt="SD Cerdas Bangsa"
                className="w-full h-[550px] object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[6px] text-sky-500 font-semibold mb-4">
              Gallery
            </p>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5">
              Dokumentasi Kegiatan
            </h2>

            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Beberapa momen kegiatan siswa dan aktivitas
              pembelajaran di Sekolah Cerdas Bangsa.
            </p>
          </div>

          <Galery />
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <img
          src="/img/gedung.jpeg"
          alt="Gedung Sekolah"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/85" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <p className="uppercase tracking-[6px] text-sky-300 font-semibold mb-4">
            Join With Us
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Siap Bergabung Bersama
            <span className="block text-sky-400">
              Sekolah Cerdas Bangsa?
            </span>
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Mari menjadi bagian dari perjalanan pendidikan
            yang berkualitas dan penuh nilai karakter.
          </p>

          <a
            href="/ppdb"
            className="inline-flex px-8 py-4 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-semibold shadow-2xl transition duration-300 hover:scale-105"
          >
            Daftar Sekarang
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;