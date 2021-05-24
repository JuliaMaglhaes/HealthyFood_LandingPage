import React from 'react';

import {
    CloseMenuIcon,
    Container,
    Icon
} from './styles';

const SideBar = () => {
  return(
      <Container>
            <Icon>
                <CloseMenuIcon/>
            </Icon>
      </Container>
  );
}

export default SideBar;