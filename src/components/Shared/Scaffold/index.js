import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// import { Container } from './styles';

const Scaffold = props =>{
  return(
      <>
      <Navbar/>

        {props.children}

      <Footer/>
      </>
  );
}

export default Scaffold;