import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ViandaCard from '../viandaCard/ViandaCard';
import styled from 'styled-components';

const CustomModal = ({ onClose, product }) => {
    return (
        <Modal isOpen={product}>
            <StyleModalHeader>
                {product?.name.toUpperCase()}
            </StyleModalHeader>
            <StyleModalBody >
                <ViandaCard image={product?.image} />
                {product?.description}
            </StyleModalBody>
            <ModalFooter>
                <ModalButton onClick={onClose}>CERRAR</ModalButton>
            </ModalFooter>
        </Modal>
    )
}

const StyleModalHeader = styled(ModalHeader)`
font-family: ${props => props.theme.fonts.titleFont};
color: ${props => props.theme.colors.importantTxt};
font-weight: ${props => props.theme.fontWeigth.bold};
margin: 20px;
`;

const StyleModalBody = styled(ModalBody)`
font-family: ${props => props.theme.fonts.normalFont};
color: ${props => props.theme.colors.simpleTxt};

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