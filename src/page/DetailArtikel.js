import React, { useState, useEffect } from 'react';
import moment from "moment";
import style from './style.module.css';
import axios from "axios";
import Napbar from './../component/Napbar'
import Footer from '../component/Footer'

import { useLocation } from 'react-router-dom';
export default function DetailArtikel() {

  const [dataArtikel, setDataArtikel] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const api = `http://89.116.228.164:3014/artikel/getOneNews`;
    const getData = async () => {
      try {
        let id = location.state.id;
        let res = await axios.post(api, { id });

        setDataArtikel(res.data);
      } catch (err) {

      }
    };

    getData();
  }, []);
  return (


    <div>
      <Napbar />
      <section className="pt-3 pb-36  overflow-hidden ">
        {dataArtikel.map((artikel) =>
          <div className="container px-4 py-2 mx-auto">
            <h2 className=" text-6xl md:text-5xl text-center font-bold font-heading font-heading tracking-px-n leading-tight text-gray-800">{artikel.judul}</h2>
            <p className=" font-medium text-gray-800 text-center leading-relaxed md:max-w-lg mx-auto">{moment(artikel.tglCreate). format("DD-MM-YYYY")}</p>
            <div className={style.bodyImg} >
              <img id='news'
                src={artikel.url}
                className={style.imgCover}
                alt={artikel.judul} />
            </div>
            <div className={style.bodyText} >
              <p className={style.titleContent}>{artikel.isi}</p>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </div>
  )
}
