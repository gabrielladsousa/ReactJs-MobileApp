import { ButtonContainer, Container } from './styles';
import Text from '../../components/Text/text';
import Button from '../../components/Button/button';
import CheckCircleIcon from '../../components/Icons/checkCircle';

function FinalizacaoCadastro() {
    return (
        <div className='container'>
            <Container>
                <Text
                    icon={<CheckCircleIcon />}
                    title="Maravilha! Seu imóvel foi cadastrado com sucesso."
                    subtitle="Você pode cadastrar outro imóvel ou finalizar por hora."
                />
                <ButtonContainer>
                    <Button
                        title="Salvar e cadastrar outro"
                        page=""
                    />
                    <Button
                        title="Finalizar"
                        backgroundColor="#FFFFFF"
                        color="#7B2CBF"
                        page=""
                    />
                </ButtonContainer>
            </Container>
        </div>
    );
};

export default FinalizacaoCadastro