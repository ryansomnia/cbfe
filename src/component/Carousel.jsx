import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function CarouselNews() {
  const [dataArtikel, setDataArtikel] = useState([]);

  useEffect(() => {
    const api =
      "https://api.sekolahcerdasbangsa.sch.id/artikel/getCarousel";

    const getData = async () => {
      try {
        const res = await axios.get(api);
        setDataArtikel(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return (
    <section className="relative w-full">
      <Carousel
        showIndicators={true}
        infiniteLoop
        autoPlay
        showArrows
        showStatus={false}
        showThumbs={false}
        interval={5000}
        swipeable
      >
        {dataArtikel.map((data, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-3xl"
          >
            {/* IMAGE */}
            <img
              src={data.url}
              alt={data.judul}
              className="h-[250px] md:h-[500px] w-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* CONTENT */}
            <div className="absolute bottom-0 left-0 p-6 md:p-10 text-left max-w-3xl">
              <span className="inline-block bg-sky-500 text-white text-xs md:text-sm px-4 py-1 rounded-full mb-4 font-semibold">
                Berita Sekolah
              </span>

              <h2 className="text-white text-2xl md:text-5xl font-bold leading-tight drop-shadow-lg">
                {data.judul}
              </h2>

              {data.deskripsi && (
                <p className="hidden md:block text-slate-200 mt-4 text-base leading-relaxed line-clamp-2">
                  {data.deskripsi}
                </p>
              )}
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}