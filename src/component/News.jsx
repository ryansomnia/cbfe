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

    const api = `https://api.sekolahcerdasbangsa.sch.id/artikel/getNews`;

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
    <section className="py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dataArtikel.map((x, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500"
          >
            <div className="overflow-hidden">
              <img
                src={x.url}
                alt={x.judul}
                className="w-full h-56 object-cover hover:scale-110 transition duration-700"
                loading="lazy"
              />
            </div>
  
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                <MdDateRange />
                <p>
                  {moment(x.tglCreate).format("DD MMM YYYY")}
                </p>
              </div>
  
              <h3 className="text-xl font-bold text-slate-800 mb-3 hover:text-blue-600 transition">
  {x.judul}
</h3>
             
              <p className="text-slate-500 text-sm leading-7 mb-5">
  {x.isi?.substring(0, 110)}...
</p>
  
              <button
                onClick={() =>
                  navigate("/detailArtikel", {
                    state: { id: x.idartikel },
                  })
                }
                className="text-blue-600 font-semibold hover:underline"
              >
                Baca Selengkapnya →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
