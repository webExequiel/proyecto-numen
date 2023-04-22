import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  return (

    <button onClick={''} className='btn-primary'>
      <FontAwesomeIcon icon={props.icon} />
    </button>

  );
}

export default Button