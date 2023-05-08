import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ViandaCard from '../viandaCard/ViandaCard';
import styled from 'styled-components';

const CustomModal = ({ onClose, image }) => {
    return (
        <Modal isOpen={image}>
            <StyleModalHeader>
                VIANDA
            </StyleModalHeader>
            <ModalBody>
                <ViandaCard image={image} />
            </ModalBody>
            <ModalFooter>
                <ModalButton onClick={onClose}>CERRAR</ModalButton>
            </ModalFooter>
        </Modal>
    )
}

const StyleModalHeader = styled(ModalHeader)`
font-family: ${props => props.theme.fonts.titleFont};
color: ${props => props.theme.colors.importantTxt};
margin: 20px;
`;

const ModalButton = styled(Button)`
font-family: ${props => props.theme.fonts.normalFont};
color: white;
background-color: green;
margin: 20px;
font-weight: 600;
`;

export default CustomModal