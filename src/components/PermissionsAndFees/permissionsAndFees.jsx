import { Container, Title, List, ListItem, Icon, Label, Price } from './styles';

const InfoList = ({ title, items }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>
            <Icon>{item.icon}</Icon>
            <div>
              <Label>{item.label}</Label>
              {item.price && <Price>R$ {item.price.toFixed(2)}</Price>}
            </div>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default InfoList;