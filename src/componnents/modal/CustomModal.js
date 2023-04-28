
import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SearchBar from '../SearchBar/SearchBar';


const ButtonModal = ({ Body, isOpenModal, onClose}) =>{
    return (
      <>
      <Modal isOpen={isOpenModal}>
        <ModalHeader>
          VIANDA
        </ModalHeader>
        <ModalBody>
          <Body />
        </ModalBody>
        <ModalFooter>
          <button onClick={onClose}>CERRAR</button>
        </ModalFooter>
      </Modal>
      </>
  )
}

const CustomModal = () => {

    const [isOpenModal, setisOpenModal] = useState(false);
    console.log(CustomModal);

    const modalOpen = () => {
      setisOpenModal(!isOpenModal);
    }

    return (
      <>
        <div className='principal'>
          <div className='secundario'>
            <Button color='success' onClick={modalOpen}>Modal Boton NavBar</Button>
          </div>
        </div>

        <ButtonModal
        isOpenModal={isOpenModal}
        Body={SearchBar}
        onClose={() => setisOpenModal(false)}
        />
      </>

  )
}

export default CustomModal






