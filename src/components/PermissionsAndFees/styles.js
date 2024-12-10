import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
`;
export const Title = styled.h3`
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.17px;
    margin: 0px;
    color: #10002B;
`;
export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
    list-style: none;
    padding: 0;
    margin: 0;
`;
export const ListItem = styled.li`
    display: flex;
    align-items: flex-start;
    gap: 8px
`;
export const Icon = styled.span`
    display: flex;
    justify-content: center;
    width: 20px;
    height: 21px;
    font-size: 12px;
`;
export const Label = styled.p`
    margin: 0;
    font-size: 16px;
`;
export const Price = styled.p`
    display: block;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.17px;
    color: #0000005C;
    margin: 0px;
`;