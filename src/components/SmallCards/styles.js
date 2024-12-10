import styled from 'styled-components';

export const Container = styled.div`
    background: none;
    width: 100%;
`;
export const Cards = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
`;
export const SmallCard = styled.div`
    width: 86px;
    height: 76px;
    padding: 24px 8px 20px 8px;
    border-radius: 8px;
    border: solid 1px #00000029;
`;
export const Icon = styled.div`
    font-size: 40px;
    color: #00000029;
`;
export const Description = styled.p`
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.17px;
    margin: 0px;
    color: #00000029;
`;