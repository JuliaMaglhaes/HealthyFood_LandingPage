import React from 'react';

import { Container } from './styles';

function Footer() {
  return(
      <Container>
          <strong>© Copyrights 2019 Stack. All Rights Reserved.</strong>
          <div className="informations">
              <li><a>Privacy Policy</a></li>
              <li><a>Terms and Conditions</a></li>
          </div>
      </Container>
  );
}

export default Footer;