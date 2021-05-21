import React from 'react';
import { MdSearch } from 'react-icons/md';

import {
    Container,
    Information,
    InputArea,
    Spacer
} from './styles';

const Header = () => { 
  return(
        <Container>
            <Information>
                <Spacer/>
                <h1>Ready for Trying a new recipe?</h1>
                <InputArea>
                    <input placeholder="Search healthy recipes"></input>
                    <button>
                        <MdSearch
                        size={30}
                        color="fff" 
                        />
                    </button>
                </InputArea>
            </Information>
        </Container>
    )
}

export default Header;