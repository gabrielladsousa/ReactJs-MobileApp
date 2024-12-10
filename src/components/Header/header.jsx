import ArrowIcon from '../Icons/arrow';
import { MyHeader, BackButton, Title } from './styles';

const Header = ({ title }) => {
  return (
    <MyHeader>
      <BackButton><ArrowIcon /></BackButton>
      <Title>{title}</Title>
    </MyHeader>
  );
};

export default Header