import React from "react";

export default function Tk() {
  const kegiatan = [
    {
      title: "Upacara Bendera",
      image: "/img/UPACARABENDERA.JPG",
    },
    {
      title: "Pembelajaran Angklung",
      image: "/img/KEGIATANPEMBELAJARANANGKLUNG.JPG",
    },
    {
      title: "Kegiatan Sains",
      image: "/img/KEGIATANPEMBELAJARANSAINS.JPG",
    },
    {
      title: "Chapel Pagi",
      image: "/img/CHAPELPAGI.JPG",
    },
    {
      title: "Gemar Membaca",
      image: "/img/GEMARMEMBACA.JPG",
    },
    {
      title: "Leadership",
      image: "/img/LEADERSHIP.JPG",
    },
  ];

  const fasilitas = [
    {
      title: "Ruang Kelas",
      image: "/img/RuangKelas.JPG",
    },
    {
      title: "Arena Bermain Outdoor",
      image: "/img/AREABERMAINOUTDOR.JPG",
    },
    {
      title: "Arena Bermain Indoor",
      image: "/img/AREABERMAININDOR.JPG",
    },
    {
      title: "Perpustakaan",
      image: "/img/PERPUSTAKAAN.JPG",
    },
    {
      title: "Sains Area",
      image: "/img/SAINSAREA.JPG",
    },
  ];

  const teachers = [
    {
      name: "Yuliana Elizabeth Ginuni S.Pd",
      role: "Guru TK B",
      image: "/img/gurutk1.png",
    },
    {
      name: "I. Sondang Aviyanti P. S.Si",
      role: "Kepala Sekolah",
      image: "/img/busondang.png",
    },
    {
      name: "Anastasia A. Winarni S.Pd",
      role: "Guru TK A",
      image: "/img/gurutk2.png",
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* HERO */}
      <section className="relative h-[75vh] flex items-center">
        <img
          src="/img/TK.JPG"
          alt="TK Cerdas Bangsa"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl text-white">
            <p className="uppercase tracking-[5px] text-sky-300 font-semibold mb-4">
              TK Cerdas Bangsa
            </p>

            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Pendidikan Anak
              <span className="block text-sky-400">
                Berbasis Karakter
              </span>
            </h1>

            <p className="text-slate-200 text-lg leading-relaxed">
              Membentuk generasi yang beriman, cerdas,
              kreatif, dan penuh kasih sejak usia dini.
            </p>
          </div>
        </div>
      </section>

      {/* VISI MISI */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/img/TK.JPG"
              alt="Kegiatan TK"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>

          <div>
            <span className="text-sky-500 font-semibold uppercase tracking-[4px]">
              Visi & Misi
            </span>

            <h2 className="text-4xl font-black text-slate-900 mt-3 mb-6">
              Membangun Generasi
              <span className="block text-sky-500">
                Yang Berkharisma
              </span>
            </h2>

            <div className="bg-slate-50 rounded-3xl p-8 shadow-lg mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Visi
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Membangun generasi yang beriman,
                berkarakter, cerdas dan berkharisma.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Misi
              </h3>

              <ul className="space-y-4 text-slate-600">
                <li>
                  • Meningkatkan rasa cinta kepada Tuhan,
                  diri sendiri dan sesama
                </li>

                <li>
                  • Menjadikan generasi yang berkarakter
                </li>

                <li>
                  • Menumbuhkembangkan kreativitas,
                  imajinasi dan kognitif
                </li>

                <li>
                  • Menghasilkan generasi yang memancarkan
                  kemuliaan Tuhan
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TUJUAN */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sky-500 font-semibold uppercase tracking-[4px]">
              Tujuan Pendidikan
            </span>

            <h2 className="text-4xl font-black text-slate-900 mt-3 mb-8">
              Tujuan
              <span className="block text-sky-500">
                TK Cerdas Bangsa
              </span>
            </h2>

            <div className="space-y-5">
              {[
                "Menghasilkan peserta didik yang berkarakter",
                "Mengenalkan bidang sains sejak dini",
                "Membiasakan penggunaan Bahasa Inggris lisan",
                "Membentuk keberanian tampil di depan umum",
                "Membiasakan gemar membaca dan berhitung",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 bg-white p-5 rounded-2xl shadow-md"
                >
                  <div className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>

                  <p className="text-slate-600 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/img/KEGIATANPEMBELAJARANSAINS.JPG"
              alt="Pembelajaran Sains"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>
        </div>
      </section>

      {/* SEJARAH */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/img/CHAPELPAGI.JPG"
              alt="Chapel Pagi"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>

          <div>
            <span className="text-sky-500 font-semibold uppercase tracking-[4px]">
              Sejarah Singkat
            </span>

            <h2 className="text-4xl font-black text-slate-900 mt-3 mb-6">
              Tentang
              <span className="block text-sky-500">
                TK Cerdas Bangsa
              </span>
            </h2>

            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>
                TK Cerdas Bangsa didirikan pada tanggal
                25 Juni 2006 dan memiliki akreditasi B.
                Sekolah ini didirikan oleh Bpk. Hendrawan
                untuk memberikan pelayanan pendidikan
                kepada anak-anak di lingkungan sekitar.
              </p>

              <p>
                Pendidikan di TK Cerdas Bangsa berbasis
                Kristen dengan fokus pada perkembangan
                karakter, kognitif, sosial emosional,
                serta motorik anak usia dini.
              </p>

              <p>
                Dengan fasilitas yang memadai dan tenaga
                pengajar berpengalaman, TK Cerdas Bangsa
                terus berkembang dan dipercaya masyarakat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STRUKTUR */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            {/* <span className="text-sky-400 uppercase tracking-[4px] font-semibold">
              Struktur Organisasi
            </span> */}

            <h2 className=" text-black text-4xl md:text-5xl font-black mt-4">
            Struktur Organisasi
            </h2>
          </div>

          {/* Yayasan */}
          <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="bg-white rounded-3xl p-8 text-center shadow-2xl hover:-translate-y-2 transition duration-300"
              >
            {/* <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-sm"> */}
              <img
                src="/img/hendrawan.png"
                alt="Hendrawan"
                className="w-40 h-40 rounded-full object-cover mx-auto mb-6 border-4 border-sky-400"
              />

              <h3 className="text-2xl font-bold text-black">
                Hendrawan
              </h3>

              <p className="text-slate-300 mt-2">
                Kepala Yayasan
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                   <img
                src="/img/erly.png"
                alt="Yap Erly"
                className="w-40 h-40 rounded-full object-cover mx-auto mb-6 border-4 border-sky-400"
              />

              <h3 className="text-2xl font-bold text-black">
                Yap Erly
              </h3>

              <p className="text-slate-300 mt-2">
                Sekretaris Yayasan
              </p>
            </div>
          </div>

          {/* Guru */}
          <div className="grid md:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 text-center shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-40 h-40 rounded-full object-cover mx-auto mb-6"
                />

                <h3 className="text-xl font-bold text-slate-900">
                  {teacher.name}
                </h3>

                <p className="text-slate-500 mt-2">
                  {teacher.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEGIATAN */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sky-500 uppercase tracking-[4px] font-semibold">
              Aktivitas
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4">
              Kegiatan Pembelajaran
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kegiatan.map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="bg-white p-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FASILITAS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sky-500 uppercase tracking-[4px] font-semibold">
              Fasilitas
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4">
              Sarana Pembelajaran
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fasilitas.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-72 object-cover hover:scale-110 transition duration-700"
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
        <img
          src="/img/TKBELAJAR.JPG"
          alt="Belajar TK"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/80" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 text-white">
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Siap Bergabung
            <span className="block text-sky-400">
              Bersama Kami?
            </span>
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed mb-10">
            Mari tumbuh bersama dalam lingkungan
            pendidikan yang penuh kasih, kreatif,
            dan berkualitas.
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