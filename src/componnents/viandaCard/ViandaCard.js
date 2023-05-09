import { Card } from './ViandaCardCSS';


const ViandaCard = ({ image, setModalProduct }) => {
    return (
        <Card>
            <img
                onClick={setModalProduct}
                src={image && require(`../../imagenes/${image}`)}
                alt="imagen"
            />
        </Card>
    )
}

export default ViandaCard

