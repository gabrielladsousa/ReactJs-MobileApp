// Componentes
import Header from '../../components/Header/header';
import Card from '../../components/Card/card';
import SmallCards from '../../components/SmallCards/smallcards';
import Locador from '../../components/Locador/locador';
import Form from '../../components/Form/form';
import Tags from '../../components/Tags/tags';
import InfoList from '../../components/PermissionsAndFees/permissionsAndFees';
import Button from '../../components/Button/button';

// Imagens
import RoomImage from '../../assets/room.jpg';
import LocadorImage from '../../assets/locador.jpg';

// Icons
import BedIcon from '../../components/Icons/bed';
import RestroomIcon from '../../components/Icons/restroom';
import CutleryIcon from '../../components/Icons/cutlery';
import HouseIcon from '../../components/Icons/house';
import WashIcon from '../../components/Icons/wash';
import CheckIcon from '../../components/Icons/check';
import CloseIcon from '../../components/Icons/close';
import CleanIcon from '../../components/Icons/clean';
import ShieldIcon from '../../components/Icons/shield';
import MoneyIcon from '../../components/Icons/money';


function CadastroImoveis() {

  const cards = [
    { title: "Quarto mobiliado", icon: <BedIcon /> },
    { title: "Banheiro equipado", icon: <RestroomIcon /> },
    { title: "Cozinha equipada", icon: <CutleryIcon /> },
    { title: "Sala equipada", icon: <HouseIcon /> },
    { title: "Área de serviço", icon: <WashIcon /> }
  ];

  const items = [
    "Guarda-roupa",
    "Frigobar",
    "Cama de casal",
    "Sacada",
    "Box blindex",
    "Chuveiro elétrico",
    "Pia",
    "Vaso sanitário",
    "Banheira",
    "Fogão elétrico",
    "Geladeira",
    "Microondas",
    "Forno elétrico",
    "Tanque",
    "Lava e seca roupas",
    "Sofá cama",
    "Televisão"
  ];

  const comodidades = [
    "Internet",
    "Tv a cabo",
    "Televisão",
    "Ar condicionado"
  ];

  const permissions = [
    { icon: <CheckIcon />, label: "Pets são permitidos" },
    { icon: <CheckIcon />, label: "Fumantes são permitidos" },
    { icon: <CheckIcon />, label: "Casais são permitidos" },
    { icon: <CloseIcon />, label: "Visitas não são permitidas" },
    { icon: <CloseIcon />, label: "Crianças não são permitidas" },
  ];

  const fees = [
    { icon: <CleanIcon />, label: "Taxa de limpeza", price: 50.0 },
    { icon: <ShieldIcon />, label: "Multa sobre avarias", price: 150.0 },
    { icon: <MoneyIcon />, label: "Taxa personalizada", price: 300.0 },
  ];

  return (
    <div className='container'>
      <Header
        title="Visualize e confirme o cadastro do seu imóvel"
      />
      <Card
        image={RoomImage}
        alt="Sala do imóvel"
        title="Poundsflats Unidade Aquário 065"
        location="Santos, SP"
        price="R$97"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus."
      />
      <SmallCards
        cards={cards}
      />
      <Locador
        name="Henrique Rodrigues"
        image={LocadorImage}
      />
      <Form />
      <Tags
        title="Itens do imóvel"
        tags={items}
      />
      <Tags
        title="Comodidades"
        tags={comodidades}
      />
      <InfoList title="Permissões" items={permissions} />
      <InfoList title="Taxas/multas" items={fees} />
      <Button title="Finalizar Cadastro do imóvel" page="/finalizacaoCadastro" />
    </div>
  );
};

export default CadastroImoveis
