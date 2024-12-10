import styled from 'styled-components';

export const ButtonPurple = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 48px;
    padding: 4px 16px 4px 16px;
    border: solid 1px #7B2CBF;
    border-radius: 8px;
    opacity: 0px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    background-color: ${(props) => props.backgroundColor || "#7B2CBF"};
    color: ${(props) => props.color || "#ffffff"};
`;


