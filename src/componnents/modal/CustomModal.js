import React from 'react'
import { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
const CustomModal = () => {
    state={
        abierto: false
    }

    abrirModal=()=>{
        this.setState({abierto: !this.state.abierto});
    }
  return (
    <Modal isOpen={this.state.abierto}>
        <ModalHeader>

        </ModalHeader>

        <ModalBody>

        </ModalBody>
        <ModalFooter>
            <Button onClick={this.abrirModal}>Cerrar</Button>
        </ModalFooter>

    </Modal>
  )
}

export default CustomModal