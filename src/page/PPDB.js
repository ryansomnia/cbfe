import React,{useState} from 'react'
import Napbar from './../component/Napbar'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import Footer from '../component/Footer';



export default function PPDB() {

  const navigate = useNavigate(); 

  const api = "http://89.116.228.164:3014/register/registerData"

   const [posts, setPosts] = useState({});

   const postData = async (e)=>{
    e.preventDefault();
    try {
      await axios.post(api,posts)
     
     Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `Registrasi Berhasil`,
      text: `Silahkan datang ke Cerdas Bangsa untuk Step selanjutnya`,
      showConfirmButton: false,
      timer: 1500
    })
    navigate("/")

    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Registrasi gagal !'
      })
    }
  }

   const handleOnChange = (e) => {
      e.preventDefault()
      setPosts(prev => {
        prev[e.target.name] = e.target.value
        return prev
      })
   }



  return (
    <div className='flex flex-col'>
      <Napbar/>
     
        <h1 className='mt-3 self-center text-3xl text-black	font-medium'>Formulir Registrasi</h1>
      <div className='my-5 mx-5 flex flex-col'>
        <form className=" w-full max-w-2xl self-center">
        <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Nama Lengkap
      </label>
      <input 
      name = "namaLengkap"
      onChange={handleOnChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" />

    </div>
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Jenis Registrasi
      </label>
      <select name = "jenisRegis" onChange={handleOnChange}className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' >
            <option value="TK">TK</option>
            <option value="SD">SD</option>
          </select>
    </div>

    </div>
  <div className="flex flex-wrap -mx-3 mb-3">
    
    <div className="w-full md:w-1/3 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Jenis Kelamin
      </label>
      <select name = "jenisKelamin" onChange={handleOnChange}className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' >
            <option value="lakiLaki">Laki-Laki</option>
            <option value="perempuan">Perempuan</option>
          </select>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        Tanggal Lahir
      </label>
      <input name = "tanggalLahir" onChange={handleOnChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="date" placeholder="Albuquerque"/>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Tempat Lahir
      </label>
      <input  name = "tempatLahir" onChange={handleOnChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" />

    </div>
  </div>
  
  <div className="flex flex-wrap -mx-3 mb-2">
   
    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Agama
      </label>
      <select 
       name = "agama"
      onChange={handleOnChange}
      className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' >
            <option value="Protestan">Protestan</option>
            <option value="Katolik">Katolik</option>
            <option value="Budha">Budha</option>
            <option value="Hindu">Hindu</option>
            <option value="Islam">Islam</option>
            <option value="Konghuchu">Konghuchu</option>
            <option value="Lain-lain">Lain-lain</option>
          </select>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Nomor Handphone
      </label>
      <input name = "noHandphone" onChange={handleOnChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" />
     
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
      Asal Sekolah
      </label>
      <input name = "asalSekolah" onChange={handleOnChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" />
      </div>
    </div>
   
  
    <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/1 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Alamat
      </label>
      <textarea name = "alamat" onChange={handleOnChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" />

    </div>
    
 
    </div>
    <div className="flex flex-wrap -mx-3 mb-2">


    
    </div>
    <div className="flex flex-wrap -mx-3 mb-2">
  

    </div>

  <button onClick={postData} className="my-1 bg-green hover:bg-tea text-white font-bold py-2 px-4 rounded w-full">
  Register
</button>

 
  
</form>


</div>
<Footer/>


    </div>
  )
}
