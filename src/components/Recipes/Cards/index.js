import React from 'react';
import ImageFoodOne from '../../../assets/img/comida_1.svg';
import ImageFoodTwo from '../../../assets/img/comida_2.svg';
import ImageFoodThree from '../../../assets/img/comida_3.svg';
import ImageFoodFour from '../../../assets/img/comida_4.svg';

import {
    Container,
    Box,
    BoxImage,
    BoxText
} from './styles';

const Cards = () => {
  return(
    <Container>
        <Box> 
            <BoxImage style={{backgroundImage: `url(${ImageFoodOne})`}}/>
            <BoxText>
                <h2>Broccoli Salad with Bacon</h2>
                <button>See Recipe</button>
            </BoxText>
        </Box>
        <Box> 
            <BoxImage style={{backgroundImage: `url(${ImageFoodTwo})`}}/>
            <BoxText>
                <h2>Classic Beef Burgers</h2>
                <button>See Recipe</button>
            </BoxText>
        </Box>
        <Box> 
            <BoxImage style={{backgroundImage: `url(${ImageFoodThree})`}}/>
            <BoxText>
                <h2>Classic Potato Salad</h2>
                <button>See Recipe</button>
            </BoxText>
        </Box>
        <Box> 
            <BoxImage style={{backgroundImage: `url(${ImageFoodFour})`}}/>
            <BoxText>
                <h2>Cherry Cobbler on the Grill</h2>
                <button>See Recipe</button>
            </BoxText>
        </Box>
    </Container>
  );
}

export default Cards;