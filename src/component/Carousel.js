import './Carousel.css'
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function CarouselNews() {
  const [dataArtikel, setDataArtikel] = useState([]);

  useEffect(() => {
    
    const api = `http://localhost:3014/artikel/getCarousel`;

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
    
    <div>
      <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
  <div id='carouselArea' className="carousel-inner relative w-full overflow-hidden mt-5 pb-5">
    {dataArtikel.map((x,i)=>
    <div className=" carousel-item active relative float-left w-full">
      <img
        src={x.url}
        key={i}
        className="block w-full"
        alt={x.judul}
      />
       <div className="  carousel-caption hidden md:block absolute text-center ">
        <h5 className="text-xl">{x.judul}</h5>
        <p>{x.isi}</p>
      </div>
    </div>
    )}
   
  </div>
  <button
    className=" carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span className=" bg-black rounded-full carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className=" visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span className=" bg-black rounded-full carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
{/* <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
  <div className="carousel-inner relative w-full overflow-hidden">
  {dataArtikel.map((data) =>
    <div className="carousel-item active relative float-left w-full">
      <img
        src={data.url}
        className="block w-full"
        alt="Wild Landscape"
      />
       <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl">{data.judul}</h5>
        <p>{data.isi}</p>
      </div>
    </div>
)}
  </div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}

  </div>
  
  )
}
