import { Card } from './ViandaCardCSS';

const ViandaCard = ({ image }) => {

    return (
        <Card>
            <img src={image} alt="imagen" />
        </Card>
    )
}

export default ViandaCard

