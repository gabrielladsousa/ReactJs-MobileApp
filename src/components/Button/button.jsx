import { ButtonPurple } from './styles';
import { useNavigate } from 'react-router-dom';

const Button = ({ title, page, backgroundColor, color }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(page);
    };

    return (
        <ButtonPurple onClick={handleClick} backgroundColor={backgroundColor} color={color}>
            {title}
        </ButtonPurple>
    );
};

export default Button