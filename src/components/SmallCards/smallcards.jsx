import { Container, Cards, SmallCard, Icon, Description } from './styles';

const SmallCards = ({ cards }) => {
    return (
        <Container>
            <Cards>
                {cards.map((item, index) => (
                    <SmallCard key={index}>
                        <Icon>{item.icon}</Icon>
                        <Description>{item.title}</Description>
                    </SmallCard>
                ))}
            </Cards>
        </Container>
    );
};

export default SmallCards