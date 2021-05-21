import React from 'react';
import Cards from './Cards';

import {
    Container,
    ContainerText,
    InfoText,
    ContainerCards
} from './styles';

const Recipes = () => {
  return(
    <Container>
        <ContainerText>
            <InfoText>
                <h1>Our Best Recipes</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </InfoText>
        </ContainerText>
        <ContainerCards>
            <Cards/>
        </ContainerCards>
    </Container>
  );
}

export default Recipes;