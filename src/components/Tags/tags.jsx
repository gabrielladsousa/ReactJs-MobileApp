import { BoxTags, Container, Title, Tag } from './styles';

const Tags = ({ title, tags }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <BoxTags>
                {tags.map((item) => (
                    <Tag key={item}>{item}</Tag>
                ))}
            </BoxTags>
        </Container>
    );
};

export default Tags