import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import Forms from '../form/Forms';

const ButtonModal = ({ Body, isOpenModal, onClose}) =>{
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

const ModalForm = () => {
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
              <FontAwesomeIcon icon={faComment} />
            </button>
          </div>
        </div>

        <ButtonModal
        isOpenModal={isOpenModal}
        Body={Forms}
        onClose={() => setisOpenModal(false)}
        />
      </>
    )
}

export default ModalForm