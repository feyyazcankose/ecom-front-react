import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Abort from '../components/Abort'
import RoutesArray from '../routes/Routes';
import { useLocation} from 'react-router-dom';
const MasterPage = () => {
  let location = useLocation();
  let Component = RoutesArray.filter(route => route.path === location.pathname);
  console.log(Component);
  Component=Component.length!==0 ? Component[0].component  : null; 
  return (
   <>
    <Header/>
    { Component!==null ? <Component /> : <Abort/> }
    <Footer/>
   </>
  )
}

export default MasterPage