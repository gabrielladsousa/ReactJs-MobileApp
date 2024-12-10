import { InfoLocador, Title, ProfileImage } from './styles';

const Locador = ({ name, image }) => {
    return (
        <InfoLocador>
            <Title>Locado por {name}</Title>
            <ProfileImage src={image} alt="Foto do locador" />
        </InfoLocador>
    );
};

export default Locador