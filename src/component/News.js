import React,{useState, useEffect} from 'react'
import axios from "axios";
import moment from "moment"
import {MdDateRange } from "react-icons/md";

  export default function News() {
    const [dataArtikel, setDataArtikel] = useState([]);

    useEffect(() => {
    
      const api = `http://localhost:3014/artikel/getNews`;
  
      const getData = async (e) => {
          try {
            let res = await axios.get(api);
            setDataArtikel(res.data);
            console.log(res.data);
          } catch (err) {
            console.log("err", err.response.status);
          }
        };
  
      getData();
    }, []);
    return (
      <section className="pt-3 pb-36  overflow-hidden mt-5">
      <div className="container px-4 py-2 mx-auto">
          <h2 className="mb-4 text-6xl md:text-5xl text-center font-bold font-heading font-heading tracking-px-n leading-tight text-gray-800">BERITA SEKOLAH</h2>
          {/* <p className="mb-24 font-medium text-gray-800 text-center leading-relaxed md:max-w-lg mx-auto">Lorem ipsum dolor sit amet, to the consectr adipiscing elit. Volutpat tempor to the condimentum vitae vel purus.</p> */}
          <div className="flex flex-wrap mb-10">
          {dataArtikel.map((x,i)=>
      <div id='news' className="bg-gray-800 ml-10">
         <img id='news'
        src={x.url}
        key={i}
        className="block w-full"
        alt={x.judul}/>
       <h1 className="  text-xl md:text-3xl
       text-gray-800 
       leading-relaxed md:max-w-lg mx-auto">{x.judul}</h1>
       <div className='flex flex-col '>
        <div className='flex flex-row'>
       <MdDateRange size={25}/>
       <p className='ml-2'>{moment(x.tglCreate).format("DD-MM-YYYY")}</p>
       </div>
       <div className='leading-relaxed w-auto mt-3'>
       <button className='ml-2 mt-2 font-semibold bg-gray-800 text-white rounded-md p-2 w-auto'>Baca Selengkapnya</button>
       </div>
        </div>

      </div>
     
          )}
      </div>
      </div>
      </section>
    )
  }
  