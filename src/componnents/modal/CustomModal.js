
import React from 'react'
import { useState } from 'react';

const CustomModal = () => {
    const [isOpenModal, setisOpenModal] = useState(false);

    const modalOpen = () => {
        setisOpenModal(!isOpenModal);
    }

  return (
    <div className='primary'>
        <div className='secundary'>
            <button color='success' onClick={modalOpen}>Mostrar boton</button>
        </div>
    </div>
  )
}

export default CustomModal