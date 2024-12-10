import styled from 'styled-components';

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
`;
export const Field = styled.div`
    height: 56px;
    background-color: #00000029;
    border-radius: 4px;
    opacity: 50%;
    border: solid 1px #00000029;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 16px;
`;
export const Label = styled.label`
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: #00000029;
`;
export const Input = styled.input`
    border: none;
    background: none;
    font-size: 16px;
    outline: none;
    color: #0000007A;
`;