import ImageBlog from '../../../assets/img/blog_image_1.svg';
import ImageFoodTwo from '../../../assets/img/bloco_image_2.svg';
import ImageFoodThree from '../../../assets/img/bloco_image_3.svg';
import avatar from '../../../assets/img/avatar.png'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

import { Container, Card, CardImage, CardArea } from './styles';

const SliderImage = () =>{
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
          }
        ]
    };

    return(
        <Container>
            <Slider {...settings}>
            <Card>
                <CardImage style={{backgroundImage: `url(${ImageBlog})`}}/>
                <CardArea>
                    <h1> Quick-start guide to nuts and seeds </h1>
                    <div className="area-person">
                        <img src={avatar} />
                        <p>Kevin Ibrahim</p>
                    </div>
                </CardArea>
            </Card>
            <Card>
                <CardImage style={{backgroundImage: `url(${ImageFoodTwo})`}}/>
                <CardArea>
                    <h1> Nutrition: Tips for Improving Your Health </h1>
                    <div className="area-person">
                        <img src={avatar} />
                        <p>Mike Jackson</p>
                    </div>
                </CardArea>
            </Card>
            <Card>
                <CardImage style={{backgroundImage: `url(${ImageFoodThree})`}}/>
                <CardArea>
                    <h1> The top 10 benefits of eating healthy </h1>
                    <div className="area-person">
                        <img src={avatar} />
                        <p>Bryan McGregor</p>
                    </div>
                </CardArea>
            </Card>
            </Slider>
        </Container>
    )
}

export default SliderImage;

