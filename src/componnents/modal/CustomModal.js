
import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const CustomModal = () => {

  const [isOpenModal, setisOpenModal] = useState(false);

  const modalOpen = () => {
    setisOpenModal(!isOpenModal);
  }

  return (

      <><div className='principal'>
      <div className='secundario'>
        <Button color='success'>Mostrar Modal</Button>
      </div>
    </div><Modal isOpen={modalOpen}>
        <ModalHeader>
          VIANDA
        </ModalHeader>
        <ModalBody>
          VIANDA
        </ModalBody>
        <ModalFooter>
          <button>AGREGAR</button>
          <button onClick={!isOpenModal}>CERRAR</button>
        </ModalFooter>
      </Modal></>

  )
}

export default CustomModal






