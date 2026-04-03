import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export default function PPDB() {
  const navigate = useNavigate();
  const api = "https://api.sekolahcerdasbangsa.sch.id/api/register/registerData";

  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(false);

  const postData = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post(api, posts);

      Swal.fire({
        icon: 'success',
        title: 'Registrasi Berhasil',
        text: 'Silahkan datang ke sekolah untuk langkah selanjutnya',
        timer: 1500,
        showConfirmButton: false
      });

      navigate("/");
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Registrasi gagal!'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setPosts(prev => ({ ...prev, [name]: value }));
  };

  const inputClass = "w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 transition";

  return (
    <div className="min-h-screen bg-primary-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-primary-600 mb-8">
          Formulir Pendaftaran
        </h1>

        <form onSubmit={postData} className="space-y-6">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-4">
            <input name="namaLengkap" onChange={handleOnChange} placeholder="Nama Lengkap" className={inputClass} />
            <select name="jenisRegis" onChange={handleOnChange} className={inputClass}>
              <option value="">Pilih Jenjang</option>
              <option value="TK">TK</option>
              <option value="SD">SD</option>
            </select>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-3 gap-4">
            <select name="jenisKelamin" onChange={handleOnChange} className={inputClass}>
              <option value="">Jenis Kelamin</option>
              <option value="lakiLaki">Laki-Laki</option>
              <option value="perempuan">Perempuan</option>
            </select>

            <input type="date" name="tanggalLahir" onChange={handleOnChange} className={inputClass} />
            <input name="tempatLahir" onChange={handleOnChange} placeholder="Tempat Lahir" className={inputClass} />
          </div>

          {/* Row 3 */}
          <div className="grid md:grid-cols-3 gap-4">
            <select name="agama" onChange={handleOnChange} className={inputClass}>
              <option value="">Agama</option>
              <option>Protestan</option>
              <option>Katolik</option>
              <option>Budha</option>
              <option>Hindu</option>
              <option>Islam</option>
              <option>Konghuchu</option>
              <option>Lainnya</option>
            </select>

            <input name="noHandphone" onChange={handleOnChange} placeholder="Nomor HP" className={inputClass} />
            <input name="asalSekolah" onChange={handleOnChange} placeholder="Asal Sekolah" className={inputClass} />
          </div>

          {/* Alamat */}
          <textarea name="alamat" onChange={handleOnChange} placeholder="Alamat Lengkap" className={inputClass + " h-24"} />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 rounded-xl shadow-md transition disabled:opacity-50"
          >
            {loading ? "Memproses..." : "Daftar Sekarang"}
          </button>
        </form>
      </div>
    </div>
  );
}
