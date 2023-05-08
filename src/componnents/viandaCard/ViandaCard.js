import { Card } from './ViandaCardCSS';


const ViandaCard = ({ image, setModalImage }) => {
    return (
        <Card>
            <img
                onClick={() => setModalImage(image)}
                src={image && require(`../../imagenes/${image}`)}
                alt="imagen"
            />
        </Card>
    )
}

export default ViandaCard

