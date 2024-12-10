import { FormContainer, Field, Label, Input } from './styles';

const Form = ({ }) => {
    return (
        <FormContainer>
            <Field>
                <Label htmlFor="tipoImovel">Tipo de imóvel</Label>
                <Input id="tipoImovel" type="text" placeholder="Casa/Apartamento" disabled />
            </Field>
            <Field>
                <Label htmlFor="quartos">Quartos</Label>
                <Input id="quartos" type="text" placeholder="3 quartos" disabled />
            </Field>
            <Field>
                <Label htmlFor="banheiros">Banheiros</Label>
                <Input id="banheiros" type="text" placeholder="2 banheiros" disabled />
            </Field>
        </FormContainer>
    );
};

export default Form