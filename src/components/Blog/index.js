import React from 'react';
import SliderCards from '../Blog/Slider';

import { Container, TextArea, SliderArea } from './styles';

const Blog = () => {
  return(
      <Container id="blog">
          <TextArea>
              <h1>Read Our Blog</h1>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </TextArea>
          <SliderArea>
            <SliderCards />
          </SliderArea>
      </Container>
  );
}

export default Blog;