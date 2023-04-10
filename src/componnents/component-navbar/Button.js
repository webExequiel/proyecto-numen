import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Button = (props) => {
  return (

    // <button src={props.img} />

    <button className='btn btn-primary'>
      <FontAwesomeIcon icon={props.icon} />
    </button>

  );
}

export default Button