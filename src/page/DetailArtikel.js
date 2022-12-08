import React,{useState, useEffect} from 'react'
import axios from "axios";
import Napbar from './../component/Napbar'
import Footer from '../component/Footer'
import {useLocation} from 'react-router-dom';
export default function DetailArtikel() {

  const [dataArtikel, setDataArtikel] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const api = `http://localhost:3014/artikel/getOneNews`;
    const getData = async () => {
        try {
          let id = location.state.id;
          let res = await axios.post(api, {id});
          console.log('x',id);
          console.log('res',res);
          setDataArtikel(res.data);
        } catch (err) {
          console.log("err", err.response.status);
        }
      };

    getData();
  }, []);
  return (
    
    
    <div>
        <Napbar/>
      
        <section className="pt-3 pb-36  overflow-hidden mt-5">
        {dataArtikel.map((artikel) =>
        <div className="container px-4 py-2 mx-auto">
     
          <h2 className="mb-4 text-6xl md:text-5xl text-center font-bold font-heading font-heading tracking-px-n leading-tight text-gray-800">{artikel.judul}</h2>
          <p className=" font-medium text-gray-800 text-center leading-relaxed md:max-w-lg mx-auto">{artikel.tglCreate}</p>
          <div className=' w-auto h-96 mx-auto' >
            {/* <h1 className='text-white'>{artikel.url}</h1> */}
            <img id='news'
        src={artikel.url}
        className=" mx-auto"
        alt={artikel.judul}/>
          </div>
          <div className=' w-auto h-96 mx-auto mt-6' >
            <h1 className='text-black'>{artikel.isi}</h1>
          </div>
      </div>
        )}
      </section>
        <Footer/>
        </div>
  )
}
