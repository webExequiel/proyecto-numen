
import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SearchBar from '../SearchBar/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const ButtonModal1 = ({ Body, isOpenModal, onClose}) =>{
    return (
      <>
      <Modal isOpen={isOpenModal}>
        <ModalHeader>
          VIANDA
        </ModalHeader>
        <ModalBody>
          <Body/>
        </ModalBody>
        <ModalFooter>
          <button onClick={onClose}>CERRAR</button>
        </ModalFooter>
      </Modal>
      </>
  )
}

const ModalSearch = () => {

    const [isOpenModal, setisOpenModal] = useState(false);
    console.log(CustomModal);

    const modalOpen = () => {
      setisOpenModal(!isOpenModal);
    }

    return (
      <>
        <div className='principal'>
          <div className='secundario'>
            <button className='btn btn-primary' onClick={modalOpen}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>

        <ButtonModal1
        isOpenModal={isOpenModal}
        Body={SearchBar}
        onClose={() => setisOpenModal(false)}
        />
      </>

  )
}

export default ModalSearch






