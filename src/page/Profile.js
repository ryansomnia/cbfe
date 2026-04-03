import React from "react";
import Galery from "../component/Galery";

export default function Profile() {
  return (
    <div className="bg-white">
      {/* HEADER */}
      <section className="bg-primary-500 text-white py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Profil Yayasan</h1>
        <p className="mt-2 text-sm md:text-base">
          Mengenal lebih dekat Yayasan Cerdas Bangsa
        </p>
      </section>

      {/* SECTION 1 */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-600 mb-4">
              Sekilas Tentang Yayasan
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Yayasan Cerdas Bangsa didirikan oleh Bapak Hendrawan sebagai ketua yayasan. Yayasan ini telah mendirikan TK Cerdas Bangsa pada tahun 2006 dan SD Cerdas Bangsa pada tahun 2007 di wilayah Cibinong, Bogor.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              TK Cerdas Bangsa memiliki akreditasi B, sedangkan SD Cerdas Bangsa memiliki akreditasi A. Keduanya berdiri dengan tujuan memberikan pendidikan berkualitas bagi generasi muda.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/img/gedung.jpeg"
              alt="Gedung Sekolah Cerdas Bangsa"
              className="w-full h-[250px] md:h-[350px] object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="py-12 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-600 mb-4">
              Latar Belakang
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Yayasan awalnya memberikan bantuan beasiswa kepada jemaat yang membutuhkan. Seiring waktu, kebutuhan semakin besar sehingga muncul ide untuk mendirikan sekolah sendiri.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Dengan berdirinya TK dan SD Cerdas Bangsa, yayasan dapat memberikan pendidikan yang lebih terjangkau dan berkualitas bagi masyarakat sekitar.
            </p>
          </div>

          <div className="order-1 md:order-2 overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/img/GEMARMEMBACA.JPG"
              alt="Kegiatan membaca siswa"
              className="w-full h-[250px] md:h-[350px] object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-primary-600 mb-6">
            Dokumentasi Kegiatan
          </h2>
          <Galery />
        </div>
      </section>
    </div>
  );
}
