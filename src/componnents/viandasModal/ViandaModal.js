import axios from 'axios';
import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


const CustomModal = ({ Body, isOpenModal, onClose }) => {
    return (
        <Modal isOpen={isOpenModal}>
            <ModalHeader>
                VIANDA
            </ModalHeader>
            <ModalBody>
                <Body />
            </ModalBody>
            <ModalFooter>
                <Button>AGREGAR</Button>
                <Button onClick={onClose}>CERRAR</Button>
            </ModalFooter>
        </Modal>
    )
}

const ViandaModal = () => {

    const [isOpenModal, setisOpenModal] = useState(false);

    const modalOpen = () => {
        setisOpenModal(!isOpenModal);
    }
    return (
        <>
            <div className='primary'>
                <div className='secundary'>
                    <Button color='success' onClick={modalOpen}>Mostrar boton</Button>
                </div>
            </div>

            <CustomModal
                isOpenModal={isOpenModal}
                Body={() => <div> Hola </div>}
                onClose={() => setisOpenModal(false)}
            />
            <div className='primary'>
                <div className='secundary'>
                    <Button color='success' onClick={modalOpen}>Mostrar boton</Button>
                </div>
            </div>

            <CustomModal
                isOpenModal={isOpenModal}
                Body={() => <div> chau </div>}
                onClose={() => setisOpenModal(false)}
            />
        </>
    )
}

/*  const [viandas, setViandas] = useState([]);

    const [vianda, setVianda] = useState();

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get("http://localhost:3001/viandas");

            setViandas(res.data);
        }

        getData()
    }, []);

    return (
        <div>
            <ViandasModal
                show={!!vianda}
                {...vianda}
            />
            <button onClick={() => setVianda(viandas[0])} > test </button>
        </div>
         */
export default ViandaModal