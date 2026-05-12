import React from "react";
import Galery from "../component/Galery";
import {
  HiOutlineAcademicCap,
  HiOutlineLightBulb,
  HiOutlineUsers,
} from "react-icons/hi2";

export default function Profile() {
  return (
    <div className="bg-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background */}
        <img
          src="/img/gedung.jpeg"
          alt="Gedung Sekolah Cerdas Bangsa"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/40" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl text-white">
            <p className="uppercase tracking-[6px] text-sky-300 font-semibold mb-5">
              Profil Yayasan
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Yayasan
              <span className="block text-sky-400">
                Cerdas Bangsa
              </span>
            </h1>

            <p className="text-slate-200 text-lg leading-relaxed max-w-2xl">
              Membangun generasi unggul melalui pendidikan
              berkualitas, karakter yang kuat, dan nilai
              spiritual yang bertumbuh.
            </p>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ABOUT */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* IMAGE */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-sky-100 rounded-full blur-3xl opacity-70" />

              <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
                <img
                  src="/img/gedung.jpeg"
                  alt="Gedung Sekolah"
                  className="w-full h-[550px] object-cover hover:scale-105 transition duration-700"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div>
              <p className="uppercase tracking-[5px] text-sky-500 font-semibold mb-4">
                Tentang Kami
              </p>

              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
                Pendidikan Berkualitas Untuk Masa Depan Anak
              </h2>

              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                Yayasan Cerdas Bangsa didirikan oleh
                Bapak Hendrawan sebagai ketua yayasan.
                Yayasan ini mendirikan TK Cerdas Bangsa
                pada tahun 2006 dan SD Cerdas Bangsa
                pada tahun 2007 di wilayah Cibinong,
                Bogor.
              </p>

              <p className="text-slate-600 leading-relaxed mb-10 text-lg">
                Dengan akreditasi TK B dan SD A,
                Yayasan Cerdas Bangsa terus berkomitmen
                memberikan pendidikan terbaik untuk
                membentuk generasi yang unggul dalam
                akademik maupun karakter.
              </p>

              {/* FEATURES */}
              <div className="grid sm:grid-cols-3 gap-5">
                <div className="bg-slate-50 rounded-3xl p-6 hover:shadow-xl transition duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center mb-5">
                    <HiOutlineAcademicCap className="text-3xl text-sky-500" />
                  </div>

                  <h3 className="font-bold text-slate-900 mb-2">
                    Akreditasi
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed">
                    TK Akreditasi B dan SD Akreditasi A
                  </p>
                </div>

                <div className="bg-slate-50 rounded-3xl p-6 hover:shadow-xl transition duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center mb-5">
                    <HiOutlineUsers className="text-3xl text-sky-500" />
                  </div>

                  <h3 className="font-bold text-slate-900 mb-2">
                    Guru Profesional
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed">
                    Membimbing siswa dengan penuh perhatian
                  </p>
                </div>

                <div className="bg-slate-50 rounded-3xl p-6 hover:shadow-xl transition duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center mb-5">
                    <HiOutlineLightBulb className="text-3xl text-sky-500" />
                  </div>

                  <h3 className="font-bold text-slate-900 mb-2">
                    Kreativitas
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed">
                    Mengembangkan potensi dan karakter anak
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-40" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* CONTENT */}
            <div>
              <p className="uppercase tracking-[5px] text-sky-500 font-semibold mb-4">
                Latar Belakang
              </p>

              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
                Berawal Dari Kepedulian
              </h2>

              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                Yayasan awalnya memberikan bantuan
                beasiswa kepada jemaat yang membutuhkan.
                Seiring waktu, kebutuhan pendidikan yang
                berkualitas semakin meningkat.
              </p>

              <p className="text-slate-600 leading-relaxed text-lg">
                Dari situlah muncul visi untuk mendirikan
                sekolah yang dapat memberikan pendidikan
                berkualitas dengan biaya yang terjangkau
                bagi masyarakat sekitar.
              </p>
            </div>

            {/* IMAGE */}
            <div className="relative">
              <div className="overflow-hidden rounded-[32px] shadow-2xl">
                <img
                  src="/img/GEMARMEMBACA.JPG"
                  alt="Kegiatan membaca siswa"
                  className="w-full h-[550px] object-cover hover:scale-105 transition duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* TITLE */}
          <div className="text-center mb-14">
            <p className="uppercase tracking-[5px] text-sky-500 font-semibold mb-4">
              Gallery
            </p>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5">
              Dokumentasi Kegiatan
            </h2>

            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Beberapa momen kegiatan dan aktivitas siswa
              di lingkungan Sekolah Cerdas Bangsa.
            </p>
          </div>

          {/* GALLERY COMPONENT */}
          <Galery />
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/img/gedung.jpeg"
            alt="Gedung Sekolah"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-slate-950/85" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <p className="uppercase tracking-[5px] text-sky-300 font-semibold mb-4">
            Bergabung Bersama Kami
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Siapkan Masa Depan Anak Bersama
            <span className="block text-sky-400">
              Sekolah Cerdas Bangsa
            </span>
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Pendidikan yang berkualitas akan membentuk
            karakter dan masa depan anak menjadi lebih baik.
          </p>

          <a
            href="/ppdb"
            className="inline-flex px-8 py-4 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-semibold shadow-2xl transition duration-300"
          >
            Daftar Sekarang
          </a>
        </div>
      </section>
    </div>
  );
}