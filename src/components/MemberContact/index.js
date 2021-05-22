import React from 'react';

import { Container } from './styles';

function MemberContact() {
    return(
        <Container id="member">
            <div className="areaText">
                <h1>Join our membership to get special offer</h1>
            </div>
            <div className="inputArea">
                <input type="email" placeholder="Enter your email address "/>
                <button>Join</button>
            </div>
        </Container>
  );
}

export default MemberContact;