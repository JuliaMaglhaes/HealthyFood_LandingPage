import React from 'react';
import Header from './Header';
import Footer from './Footer';

// import { Container } from './styles';

const Scaffold = props =>{
  return(
      <>
      <Header/>

        {props.children}

      <Footer/>
      </>
  );
}

export default Scaffold;