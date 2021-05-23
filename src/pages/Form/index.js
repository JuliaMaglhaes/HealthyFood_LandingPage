import React from 'react';
import Scaffold from '../../components/Shared/Scaffold';
import FormPage from './FormPage';

import{ Container } from './styles'

function Form() {
  return(
      <Scaffold>
        {/* <Container> */}
          {/* <div className="first-Container">
            <h1>Welcome Back</h1>
            <button> Sign In </button>
          </div>
          <div className="second-Container"> */}
            <FormPage/>
          {/* </div>
        </Container> */}
      </Scaffold>
  );
}

export default Form;