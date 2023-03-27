
import './Carousel.css'
import React, { useEffect, useState } from "react";
import axios from "axios";
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function CarouselNews() {
  const [dataArtikel, setDataArtikel] = useState([]);

  useEffect(() => {

    const api = `https://sekolahcerdasbangsa.sch.id/api/artikel/getCarousel`;

    const getData = async (e) => {
      const config = {
        headers: {
          "Referrer-Policy": "unsafe-url"
        },
      };
      try {
        let res = await axios.get(api, config);
        setDataArtikel(res.data);
      } catch (err) {
      }
    };

    getData();
  }, []);
  return (

    <div className=' relative bg-white'>
      <Carousel
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        swipeAnimationHandler={false}
        interval={5000}
      >
        {dataArtikel.map((data) =>
            <div id='divCarousel' className=' mx-5 my-2'>
              <img src={data.url}  alt='' id='imgCarousel' className='rounded-lg poster-header object-cover' />
              {/* <p className='font-bold title-banner'>{data.judul}</p> */}
            </div>

        )}
      </Carousel>

    </div>
  )
}
