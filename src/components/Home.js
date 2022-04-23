import React from 'react'
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Catagores from './main/Catagores';
import Hero from './main/hero/Hero';
import Trend from './main/Trend';



const Home = () => {
  return (
    <>

      <Hero />
      <Trend />
      <Catagores />
    </>
  )
}

export default Home;