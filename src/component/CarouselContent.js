import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselContent.css'

function CarouselContent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img style={{ opacity:'90%', width:'100%', height:620, display: 'block',  marginLeft : 'auto', marginRight :'auto'}}  
          className="d-block"
          src="/img/ppdb.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='hTextCarousel'>Penerimaan Peserta Didik Baru</h3>
          <p className='pTextCarousel'>Segera daftakan anak anak anda dengan meng-klik banner ini atau klik halaman PPDB di pojok kanan atas</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{ opacity:'90%', width:'100%', height:620, display: 'block',  marginLeft : 'auto', marginRight :'auto'}}  
          className="d-block"
          src="/img/seminar.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='hTextCarousel'>Seminar Parenting</h3>
          <p className='pTextCarousel'>Segera daftakan anak anak anda dengan meng-klik banner ini atau klik halaman PPDB di pojok kanan atas</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{ opacity:'90%', width:'100%', height:620, display: 'block',  marginLeft : 'auto', marginRight :'auto'}}  
          className="d-block"
          src="/img/natal.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='hTextCarousel'>Cerdas Bangsa Christmas</h3>
          <p className='pTextCarousel'>
            come and join us !!!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselContent;
// );

  
// }

// render(<CarouselContent />);
