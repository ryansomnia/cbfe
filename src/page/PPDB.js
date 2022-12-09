import React,{useState} from 'react'
import Napbar from './../component/Napbar'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'



export default function PPDB() {

  const navigate = useNavigate(); 

  const api = "http://8.215.37.21:3014/register/registerData"

   const [posts, setPosts] = useState({});

   const postData = async (e)=>{
    e.preventDefault();
    try {
     let result = await axios.post(api,posts)
     console.log(result);
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
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Registrasi gagal !'
      })
    }
  }

   const handleOnChange = (e) => {
      e.preventDefault()
      console.log(e.target.value);
      setPosts(prev => {
        prev[e.target.name] = e.target.value
        return prev
      })
      console.log(posts);
   }



  return (
    <div className='flex flex-col'>
      <Napbar/>
     
        <h1 className='mt-5 mb-2 self-center text-3xl text-black	font-medium'>Formulir Registrasi</h1>
      <div className=' m-5 flex flex-col'>
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
       Nama Panggilan
      </label>
      <input 
       name = "NamaPanggilan"
      onChange={handleOnChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" />

    </div>
    </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    
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
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
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
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Nomor Handphone
      </label>
      <input name = "noHandphone" onChange={handleOnChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" />
     
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
      Bertempat Tinggal
      </label>
      <input name = "bertempatTinggal" onChange={handleOnChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" />
      
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
      Jarak dari sekolah
      </label>
      <input name = "jarakKeSekolah" onChange={handleOnChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="Km" />
      
    </div>
    
    </div>
    <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Nomor Induk Kependudukan
      </label>
      <input name="NIK" onChange={handleOnChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" />
     
    </div>
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
      Asal Sekolah
      </label>
      <input name = "asalSekolah" onChange={handleOnChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" />
      </div>
    </div>

    <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/1 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Tanggal dan No.STTBK TK
      </label>
      <input name = "tanggalDanNoSTTBTK" onChange={handleOnChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" />
     
    </div>
    
    </div>


  <button onClick={postData} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
  Register
</button>

 
  
</form>


</div>


    </div>
  )
}
