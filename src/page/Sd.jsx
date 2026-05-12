import React from "react";

export default function Sd() {
  const teachers = [
    {
      name: "Garina Austin S.Pd",
      role: "Wali Kelas 1",
      image: "/img/garina.png",
    },
    {
      name: "Fanilisa Ernawati, S.Pd",
      role: "Wali Kelas 2",
      image: "/img/fani.png",
    },
    {
      name: "Ratna Juita S.Pd",
      role: "Wali Kelas 3",
      image: "/img/ratna.png",
    },
    {
      name: "Marta Simanullang, S.Pd",
      role: "Wali Kelas 4",
      image: "/img/marta.png",
    },
    {
      name: "Dame Romiuli S, S.Pd",
      role: "Wali Kelas 5",
      image: "/img/dame.png",
    },
    {
      name: "Janson Sitanggang, SE",
      role: "Wali Kelas 6",
      image: "/img/janson.png",
    },
    {
      name: "Yosephine Margriet, S.Pd",
      role: "Guru Bahasa Inggris",
      image: "/img/yosephine.png",
    },
    {
      name: "Intan Medina, S.Kom",
      role: "Guru TIK",
      image: "/img/intan.png",
    },
    {
      name: "Asri Febriyanti",
      role: "Guru Bahasa Sunda",
      image: "/img/asri.png",
    },
    {
      name: "Calvin Yehezkiel",
      role: "Guru Olahraga",
      image: "/img/calvin.png",
    },
    {
      name: "Fransiska",
      role: "Guru Bahasa Mandarin",
      image: "/img/afung.png",
    },
    {
      name: "Herodes Lenamah, S.Th",
      role: "Guru PAK",
      image: "/img/herodes.png",
    },
  ];

  const fasilitas = [
    {
      title: "Hall Lantai 3",
      image: "/img/lt3.JPG",
    },
    {
      title: "Perpustakaan",
      image: "/img/perpus.JPG",
    },
    {
      title: "Lapangan Olahraga",
      image: "/img/lapangan.JPG",
    },
    {
      title: "Lab Komputer",
      image: "/img/ruangkomputer.JPG",
    },
    {
      title: "UKS",
      image: "/img/uks.JPG",
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* HERO */}
      <section className="relative h-[75vh] flex items-center">
        <img
          src="/img/SD.JPG"
          alt="SD Cerdas Bangsa"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-900/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl text-white">
            <p className="uppercase tracking-[5px] text-sky-300 font-semibold mb-4">
              Sekolah Dasar
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              SD
              <span className="block text-sky-400">
                Cerdas Bangsa
              </span>
            </h1>

            <p className="text-slate-200 text-lg leading-relaxed">
              Membangun generasi yang unggul,
              berkarakter, mandiri, dan berprestasi.
            </p>
          </div>
        </div>
      </section>

      {/* VISI MISI */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/img/belajar.JPG"
              alt="Belajar SD"
              className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
            />
          </div>

          <div>
            <span className="text-sky-500 font-semibold uppercase tracking-[4px]">
              Visi & Misi
            </span>

            <h2 className="text-4xl font-black text-slate-900 mt-3 mb-8">
              Pendidikan Berkualitas
            </h2>

            <div className="bg-sky-50 border border-sky-100 rounded-3xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-sky-600 mb-4">
                Visi
              </h3>

              <p className="text-slate-700 leading-relaxed">
                Terwujudnya sekolah yang unggul dalam
                berakhlak mulia, berprestasi,
                mandiri, dan nasionalis.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-5">
                Misi
              </h3>

              <ul className="space-y-4 text-slate-700">
                {[
                  "Menumbuhkan penghayatan dan pengalaman ajaran agama.",
                  "Mengembangkan kurikulum sesuai standar nasional.",
                  "Menciptakan pembelajaran aktif dan kreatif.",
                  "Mengembangkan sistem penilaian autentik.",
                  "Meningkatkan kualitas pendidik.",
                  "Meningkatkan prestasi akademik dan non akademik.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-sky-500"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEJARAH */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-sky-500 font-semibold uppercase tracking-[4px]">
              Tentang Kami
            </span>

            <h2 className="text-4xl font-black text-slate-900 mt-3 mb-6">
              Sejarah SD Cerdas Bangsa
            </h2>

            <p className="text-slate-600 leading-relaxed mb-5">
              SD Cerdas Bangsa didirikan pada tanggal
              01 Juli 2007 berdasarkan izin Dinas
              Pendidikan Kabupaten Bogor dengan
              akreditasi A.
            </p>

            <p className="text-slate-600 leading-relaxed mb-5">
              Sekolah ini didirikan untuk ikut
              berperan aktif dalam mencerdaskan
              kehidupan bangsa melalui pendidikan
              yang berkualitas dan berkarakter.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Dengan fasilitas lengkap, lingkungan
              yang nyaman, dan tenaga pengajar
              berkualitas, SD Cerdas Bangsa terus
              berkembang hingga sekarang.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/img/doaSD.JPG"
              alt="Doa Bersama"
              className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
            />
          </div>
        </div>
      </section>

      {/* KEPALA SEKOLAH */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-sky-500 font-semibold uppercase tracking-[4px]">
            Kepala Sekolah
          </span>

          <h2 className="text-4xl font-black text-slate-900 mt-3 mb-12">
            Tenaga Pengajar Profesional
          </h2>

          <div className="bg-white border border-slate-200 rounded-[32px] shadow-xl p-10">
            <img
              src="/img/tiarma.png"
              alt="Kepala Sekolah"
              className="w-40 h-40 rounded-full object-cover mx-auto mb-6 border-4 border-sky-100"
            />

            <h3 className="text-2xl font-bold text-slate-900">
              Tiarma Rosmauli S.Kom., S.Pd
            </h3>

            <p className="text-sky-600 font-medium mt-2">
              Kepala Sekolah
            </p>
          </div>
        </div>
      </section>

      {/* GURU */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-sky-500 font-semibold uppercase tracking-[4px]">
              Guru SD
            </span>

            <h2 className="text-4xl font-black text-slate-900 mt-3">
              Tim Pengajar
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachers.map((teacher, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-8 text-center group"
              >
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-5 border-4 border-sky-100 group-hover:scale-105 transition"
                />

                <h3 className="text-lg font-bold text-slate-900">
                  {teacher.name}
                </h3>

                <p className="text-sky-600 mt-2 text-sm">
                  {teacher.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FASILITAS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-sky-500 font-semibold uppercase tracking-[4px]">
              Fasilitas
            </span>

            <h2 className="text-4xl font-black text-slate-900 mt-3">
              Sarana & Prasarana
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fasilitas.map((item, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-700" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Bergabung Bersama SD Cerdas Bangsa
          </h2>

          <p className="text-sky-100 text-lg leading-relaxed mb-10">
            Wujudkan masa depan terbaik anak bersama
            pendidikan yang berkualitas dan penuh karakter.
          </p>

          <a
            href="/ppdb"
            className="inline-block px-10 py-4 rounded-full bg-white text-sky-600 font-bold shadow-2xl hover:scale-105 transition duration-300"
          >
            Daftar Sekarang
          </a>
        </div>
      </section>
    </div>
  );
}