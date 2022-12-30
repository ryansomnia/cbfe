
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
          <div>
            <div id='divCarousel' className=' mx-5 my-2'>
              <img src={data.url} alt='' id='imgCarousel' className='rounded-lg poster-header' />

            </div>
            <div className='m-3'>
              <p className=' text-3xl font-bold '>{data.judul}</p>
            </div>
          </div>

        )}
      </Carousel>

    </div>
  )
}
