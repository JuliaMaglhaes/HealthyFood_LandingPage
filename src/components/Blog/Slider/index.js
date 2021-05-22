import ImageBlog from '../../../assets/img/blog_image_1.svg';
import ImageFoodTwo from '../../../assets/img/bloco_image_2.svg';
import ImageFoodThree from '../../../assets/img/bloco_image_3.svg';
import avatar from '../../../assets/img/avatar.png'
import React from "react";

import { Container, Card, CardImage, CardArea } from './styles';

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
]

const Slider = () =>{
   
    return(
        <Container>
            {fakeData.map(item=>(
                    <Card>
                    <CardImage style={{backgroundImage: `url(${item.image})`}}/>
                    <CardArea>
                        <h1> {item.text}</h1>
                        <div className="area-person">
                            <img src={avatar} />
                            <p>{item.username}</p>
                        </div>
                    </CardArea>
                    </Card>
                ))}
        </Container>
    )
}

export default Slider;

