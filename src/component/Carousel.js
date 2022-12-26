
import './Carousel.css'
import React, { useEffect, useState } from "react";
import axios from "axios";
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function CarouselNews() {
  const [dataArtikel, setDataArtikel] = useState([]);

  useEffect(() => {
    
    const api = `http://89.116.228.164:3014/artikel/getCarousel`;

    const getData = async (e) => {
        try {
          let res = await axios.get(api);
          setDataArtikel(res.data);
        } catch (err) {
        }
      };

    getData();
  }, []);
  return (
   
  <div>
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        showArrows={true}
        showThumbs={false}
        interval={5000}
      >
         {dataArtikel.map((data) =>
        <div >
          <img src={data.url} alt='' id='imgCarousel' className=' rounded-lg'/>
          <p>{data.judul}</p>
        </div>
       
)}
      </Carousel>
     
    </div>
  )
}
