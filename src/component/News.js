import React, { useState, useEffect } from 'react'
import axios from "axios";
import moment from "moment"
import { MdDateRange, MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
// import DetailArtikel from '../page/DetailArtikel';
export default function News() {

  const [dataArtikel, setDataArtikel] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    const api = `https://sekolahcerdasbangsa.sch.id/api/artikel/getNews`;

    const getData = async (e) => {
      try {
        let res = await axios.get(api);
        setDataArtikel(res.data);
      } catch (err) {
      }
    };

    getData();
  }, []);


  const slideLeft = () => {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 299
  }

  const slideRight = () => {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 299
  }

  return (
<div className=' bg-white'> 
    <div className='flex items-center m-4'>
      <MdChevronLeft className='cursor-pointer' size={50} onClick={slideLeft} />
      <div id='slider' className=" h-full w-full overflow-x-hidden scroll whitespace-nowrap scroll-smooth">
        {dataArtikel.map((x, i) =>
        <>
          <div style={{maxWidth: '283px'}} className="rounded-lg shadow-lg bg-green-lato max-w-sm cursor-pointer inline-block">
            <picture className="rounded-lg overflow-hidden">
              <img className=" h-52 w-full rounded-t-lg hover:scale-125 ease-in duration-300 rounded-lg" src={x.url} alt="" />
            </picture>
            <div className="p-6">
              <h5 className=" text-yellow text-xl font-medium mb-2 truncate text-left">{x.judul}</h5>
              <p className='text-left text-1xl text-white pb-3 truncate pr-2'>{x.isi}</p>
              <div className='flex flex-row'>
                <MdDateRange size={17} color={'#FFFFFF'} />
                <p className="text-white text-xs mb-4 ml-2">{moment(x.tglCreate).format("DD-MM-YYYY")}</p>
              </div>
              <button type="button"
                className="border border-r-8 text-center w-full rounded-md bg-white font-bold py-1 text-green"
                onClick={() => navigate('detailArtikel', { state: { id: x.idartikel } })}
              >Selengkapnya</button>
            </div>
          </div>
          {
            i + 1 == dataArtikel.length ? <></>: <span className='mr-4'></span> 
          }
          </>
        )}
      </div>
      <MdChevronRight className='cursor-pointer' size={50} onClick={slideRight} />
    </div>
    </div>
  )
}
