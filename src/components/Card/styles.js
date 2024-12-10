import styled from 'styled-components';
import { BsCameraVideo } from 'react-icons/bs';

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: none;
    border-radius: 10px;
    overflow: hidden
`;
export const Image = styled.img`
    width: 100%;
    border-radius: 24px;
    object-fit: cover;
`;
export const Title = styled.h2`
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -0.17px;
    color: #10002B;
`;
export const Location = styled.p`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.17px;
    color: #10002B;
    margin: 0px;
`;
export const Description = styled.p`
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.17px;
    color: #00000029;
`;
export const IconCamera = styled(BsCameraVideo)`
    width: 16px;
    height: 16px;
    margin-right: 8px;
`;
export const VideoButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 36px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    color: #ffffff;
    background-color: #7B2CBF;
`;
export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
`;
export const DotsContainer = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
export const Dot = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'active',
})`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#7B2CBF" : "#0000007A;")};
  border: ${(props) => (props.active ? "solid 2px #7B2CBF" : "")};
`;