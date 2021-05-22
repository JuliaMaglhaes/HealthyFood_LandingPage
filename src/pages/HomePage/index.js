import React from 'react';
import Header from '../../Shared/Scaffold/Header';
import Recipes from '../../components/Recipes';
import Banner from '../../components/Banner';
import Blog from '../../components/Blog';
import SubHeader from '../../Shared/SubHeader';
import Scaffold from '../../Shared/Scaffold';

// import { Container } from './styles';

const HomePage = () => {
  return(
      <>
       <Scaffold>
        <SubHeader/>
          <Recipes/>
          <Banner/>
          <Blog />
       </Scaffold>
      </>
  );
}

export default HomePage;