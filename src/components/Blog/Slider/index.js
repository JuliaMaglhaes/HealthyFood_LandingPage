import ImageBlog from '../../../assets/img/blog_image_1.svg';
import ImageFoodTwo from '../../../assets/img/bloco_image_2.svg';
import ImageFoodThree from '../../../assets/img/bloco_image_3.svg';
import ImageFoodFour from '../../../assets/img/bloco_image_4.svg'
import avatar from '../../../assets/img/avatar.png';
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md'

import React from 'react';
import Carousel from 'react-elastic-carousel'

import { Container, Card, CardImage, CardArea } from './styles';

const breakPoints =[
    {
        width: 500,
        itemsToShow: 1
    },
    {
        width: 768,
        itemsToShow:2
    },
    {
        width:1200,
        itemsToShow:3.4,
        pagination: false
    },
    {
        width:1500,
        itemsToShow:4
    },
]
const fakeData = [
    {
        image: `${ImageBlog}`,
        text: 'Quick-start guide to nuts and seeds',
        username: 'Kevin Ibrahim'
    },
    {
        image: `${ImageFoodTwo}`,
        text: 'Nutrition: Tips for Improving Your Health',
        username: 'Mike Jackson'
    },
    {
        image: `${ImageFoodThree}`,
        text: 'The top 10 benefits of eating healthy',
        username: 'Bryan McGregor',
    },

    {
        image: `${ImageFoodFour}`,
        text: 'Delicious Healthy Foods here',
        username: 'Júlia Mac',
    },
    
]

const SliderCards = () =>{
   
    return(
        <Container>
            <Carousel breakPoints={breakPoints}>
                {fakeData.map(item=>(
                        <Card className="card">
                            <CardImage style={{backgroundImage: `url(${item.image})`}}></CardImage>
                            <CardArea>
                            <h1> {item.text}</h1>
                            <div className="area-person">
                                <img src={avatar} alt="Avatar" />
                                <p>{item.username}</p>
                            </div>
                            </CardArea>
                        </Card>
                    ))}
                    </Carousel>
        </Container>

    )
}

export default SliderCards;

