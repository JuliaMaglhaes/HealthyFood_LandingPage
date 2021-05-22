import React from 'react';
import Recipes from '../../components/Recipes';
import Banner from '../../components/Banner';
import Blog from '../../components/Blog';
import SubHeader from '../../components/Shared/SubHeader';
import Scaffold from '../../components/Shared/Scaffold';
import MemberContact from '../../components/MemberContact';


const HomePage = () => {
  return(
       <Scaffold>
          <SubHeader/>
          <Recipes/>
          <Banner/>
          <Blog />
          <MemberContact/>
       </Scaffold>
  );
}

export default HomePage;