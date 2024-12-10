import { Container, Icon, Title, SubTitle } from './styles';

const Text = ({ icon, title, subtitle }) => {
    return (
        <Container>
            <Icon>{icon}</Icon>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
        </Container>
    );
};

export default Text
