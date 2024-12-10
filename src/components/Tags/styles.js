import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 16px;
`;
export const Title = styled.h3`
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.17px;
    margin: 0px;
    color: #10002B;
`;
export const BoxTags = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`;
export const Tag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 12px;
    border: 1px solid #00000029;
    border-radius: 8px;
    font-size: 12px;
    line-height: 16px;
    color: #000000CC;
`;