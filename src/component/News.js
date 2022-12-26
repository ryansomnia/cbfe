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

    const api = `http://89.116.228.164:3014/artikel/getNews`;

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
    slider.scrollLeft = slider.scrollLeft -  500
  }

  const slideRight = () => {
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft +  500
  }
  
  return (

    <div className='flex relative items-center m-4'>
      <MdChevronLeft className='cursor-pointer' size={50} onClick={slideLeft}/>
      <div id='slider' className="h-full w-full overflow-x-hidden scroll whitespace-nowrap scroll-smooth">
        {dataArtikel.map((x, i) =>
          <div className="rounded-lg shadow-lg mr-7 bg-green max-w-sm cursor-pointer inline-block">
            <img className="rounded-t-lg hover:scale-105 ease-in-out duration-300 rounded-md" src={x.url} alt="" />
            <div className="p-6">
              <h5 className="text-white text-xl font-medium mb-2">{x.judul}</h5>
              <div className='flex flex-row'>
                <MdDateRange size={25} color={'EDF6F3'} />
                <p className="text-white text-base mb-4">{moment(x.tglCreate).format("DD-MM-YYYY")}</p>
              </div>

              <button type="button"
                className=" inline-block px-6 py-2.5 text-green font-medium text-xs bg-white
       leading-tight uppercase rounded shadow-md hover:bg-green hover:shadow-lg 
       focus:bg-green focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-green active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => navigate('detailArtikel', { state: { id: x.idartikel } })}
              >Baca Selengkapnya</button>
            </div>
          </div>
        )}
      </div>
      <MdChevronRight className='cursor-pointer' size={50} onClick={slideRight}/>
    </div>

  )
}
