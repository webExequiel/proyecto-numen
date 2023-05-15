import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const Button = (props) => {
  return (

    <button className='btn btn-primary' onClick={''} >
      <FontAwesomeIcon icon={props.icon} />
    </button>

  )
}

export default Button;