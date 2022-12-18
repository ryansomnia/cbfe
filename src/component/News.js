import React,{useState, useEffect} from 'react'
import axios from "axios";
import moment from "moment"
import {MdDateRange } from "react-icons/md";
import { useNavigate } from "react-router-dom";
// import DetailArtikel from '../page/DetailArtikel';
  export default function News() {

    const [dataArtikel, setDataArtikel] = useState([]);

    const navigate = useNavigate(); 
    
    useEffect(() => {
    
      const api = `http://8.215.37.21:3014/artikel/getNews`;
  
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
      <section className="pt-3 pb-12  overflow-hidden mt-5 ml-12">
       <div className="flex justify-left">
       {dataArtikel.map((x,i)=>
  <div className="rounded-lg shadow-lg mr-7 bg-green max-w-sm">
      <img className="rounded-t-lg" src={x.url} alt=""/>
    <div className="p-6">
      <h5 className="text-white text-xl font-medium mb-2">{x.judul}</h5>
      <div className='flex flex-row'>
        <MdDateRange size={25} color={'EDF6F3'}/>
      <p className="text-white text-base mb-4">{moment(x.tglCreate).format("DD-MM-YYYY")}</p>
      </div>
      
      <button type="button" 
      className=" inline-block px-6 py-2.5 text-green font-medium text-xs bg-white
       leading-tight uppercase rounded shadow-md hover:bg-green hover:shadow-lg 
       focus:bg-green focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-green active:shadow-lg transition duration-150 ease-in-out" 
        onClick={()=>navigate('detailArtikel', {state:{id:x.idartikel}})}
        >Baca Selengkapnya</button>
    </div>
  </div>
  )}
</div>

      </section>
     
    )
  }
  