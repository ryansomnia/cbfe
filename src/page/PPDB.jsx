import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  HiOutlineUser,
  HiOutlineMapPin,
  HiOutlineAcademicCap,
} from "react-icons/hi2";

export default function PPDB() {
  const navigate = useNavigate();

  const api =
    "https://api.sekolahcerdasbangsa.sch.id/register/registerData";

  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(false);

  const postData = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post(api, posts);

      Swal.fire({
        icon: "success",
        title: "Registrasi Berhasil",
        text: "Silahkan datang ke sekolah untuk langkah selanjutnya",
        timer: 2000,
        showConfirmButton: false,
      });

      navigate("/");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Registrasi Gagal",
        text: "Silahkan coba kembali",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setPosts((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const inputClass =
    "w-full rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-sm px-5 py-4 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition duration-300";

  return (
      <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-32 pb-20 px-4">
          {/* Background */}
    <div className="absolute inset-0">
      <img
        src="/img/gedung.jpeg"
        alt="Gedung Sekolah"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/80" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/70 to-slate-950/95" />
    </div>

    {/* Content */}
    <div className="relative z-10"></div>
      <div className="max-w-6xl mx-auto">
        {/* TOP */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[6px] text-sky-500 font-semibold mb-4">
            PPDB
          </p>

          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-5">
            Formulir Pendaftaran
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Bergabunglah bersama Sekolah Cerdas Bangsa untuk
            membangun generasi unggul dengan pendidikan,
            karakter, dan iman yang kuat.
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-[40px] overflow-hidden">
          <div className="grid lg:grid-cols-5">
            {/* LEFT SIDE */}
            <div className="lg:col-span-2 bg-slate-900 relative p-10 overflow-hidden">
              {/* BG IMAGE */}
              <img
                src="/img/gedung.jpeg"
                alt="Gedung Sekolah Cerdas Bangsa"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-10">
                  <img
                    src="/logocb.png"
                    alt="Logo Sekolah"
                    className="w-14 h-14"
                  />

                  <div>
                    <h2 className="text-white font-bold text-xl">
                      CERDAS BANGSA
                    </h2>

                    <p className="text-slate-300 text-sm">
                      Christian School
                    </p>
                  </div>
                </div>

                <h3 className="text-3xl font-black text-white leading-tight mb-6">
                  Pendidikan Berkualitas Untuk Masa Depan Anak
                </h3>

                <p className="text-slate-300 leading-relaxed mb-10">
                  Kami menghadirkan pendidikan yang berfokus pada
                  akademik, karakter, kreativitas, dan nilai
                  spiritual.
                </p>

                {/* FEATURES */}
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                      <HiOutlineAcademicCap className="text-white text-2xl" />
                    </div>

                    <div>
                      <h4 className="text-white font-semibold">
                        Akreditasi A
                      </h4>

                      <p className="text-slate-400 text-sm">
                        Pendidikan berkualitas dan terpercaya
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                      <HiOutlineUser className="text-white text-2xl" />
                    </div>

                    <div>
                      <h4 className="text-white font-semibold">
                        Guru Profesional
                      </h4>

                      <p className="text-slate-400 text-sm">
                        Membimbing siswa dengan penuh perhatian
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                      <HiOutlineMapPin className="text-white text-2xl" />
                    </div>

                    <div>
                      <h4 className="text-white font-semibold">
                        Lingkungan Nyaman
                      </h4>

                      <p className="text-slate-400 text-sm">
                        Fasilitas lengkap dan modern
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="lg:col-span-3 p-8 md:p-12">
              <form
                onSubmit={postData}
                className="space-y-6"
              >
                {/* ROW 1 */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-2 block">
                      Nama Lengkap
                    </label>

                    <input
                      type="text"
                      name="namaLengkap"
                      onChange={handleOnChange}
                      placeholder="Masukkan nama lengkap"
                      className={inputClass}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-2 block">
                      Jenjang
                    </label>

                    <select
                      name="jenisRegis"
                      onChange={handleOnChange}
                      className={inputClass}
                      required
                    >
                      <option value="">
                        Pilih Jenjang
                      </option>

                      <option value="TK">
                        TK
                      </option>

                      <option value="SD">
                        SD
                      </option>
                    </select>
                  </div>
                </div>

                {/* ROW 2 */}
                <div className="grid md:grid-cols-3 gap-5">
                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-2 block">
                      Jenis Kelamin
                    </label>

                    <select
                      name="jenisKelamin"
                      onChange={handleOnChange}
                      className={inputClass}
                      required
                    >
                      <option value="">
                        Pilih Jenis Kelamin
                      </option>

                      <option value="lakiLaki">
                        Laki-Laki
                      </option>

                      <option value="perempuan">
                        Perempuan
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-2 block">
                      Tanggal Lahir
                    </label>

                    <input
                      type="date"
                      name="tanggalLahir"
                      onChange={handleOnChange}
                      className={inputClass}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-2 block">
                      Tempat Lahir
                    </label>

                    <input
                      type="text"
                      name="tempatLahir"
                      onChange={handleOnChange}
                      placeholder="Contoh: Bogor"
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                {/* ROW 3 */}
                <div className="grid md:grid-cols-3 gap-5">
                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-2 block">
                      Agama
                    </label>

                    <select
                      name="agama"
                      onChange={handleOnChange}
                      className={inputClass}
                      required
                    >
                      <option value="">
                        Pilih Agama
                      </option>

                      <option value="Protestan">
                        Protestan
                      </option>

                      <option value="Katolik">
                        Katolik
                      </option>

                      <option value="Budha">
                        Budha
                      </option>

                      <option value="Hindu">
                        Hindu
                      </option>

                      <option value="Islam">
                        Islam
                      </option>

                      <option value="Konghuchu">
                        Konghuchu
                      </option>

                      <option value="Lainnya">
                        Lainnya
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-2 block">
                      Nomor HP
                    </label>

                    <input
                      type="text"
                      name="noHandphone"
                      onChange={handleOnChange}
                      placeholder="08xxxxxxxxxx"
                      className={inputClass}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-2 block">
                      Asal Sekolah
                    </label>

                    <input
                      type="text"
                      name="asalSekolah"
                      onChange={handleOnChange}
                      placeholder="Nama sekolah asal"
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                {/* ADDRESS */}
                <div>
                  <label className="text-sm font-semibold text-slate-700 mb-2 block">
                    Alamat Lengkap
                  </label>

                  <textarea
                    name="alamat"
                    onChange={handleOnChange}
                    placeholder="Masukkan alamat lengkap"
                    className={`${inputClass} h-32 resize-none`}
                    required
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-lg shadow-xl transition duration-300 disabled:opacity-50"
                >
                  {loading
                    ? "Memproses..."
                    : "Daftar Sekarang"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}