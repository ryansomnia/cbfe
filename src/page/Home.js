import React from 'react'
import Navbar from '../component/Navbar'
// import Navbarr from '../component/Navbarr'
import Product from '../component/Product'
// import News from '../component/News'
import Tk from './Tk'
import Sd from './Sd'
// import Form from '../component/Form'
import Footer from '../component/Footer'
// import CarouselNews from '../component/Carousel'


const Home = () => {
  return (
    <div>
     <Navbar/>
     <Tk/>
     <Sd/>
     <Product/>
     <Footer/>
    </div>
  )
}

export default Home
