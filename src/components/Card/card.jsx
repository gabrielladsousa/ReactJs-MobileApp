import React, { useState } from "react";
import { CardInfo, Image, Title, Location, Description, VideoButton, IconCamera, ImageContainer, Dot, DotsContainer } from './styles';

const Card = ({ image, alt, title, location, price, description }) => {
    const [activeDot, setActiveDot] = useState(0);
    const dots = [0, 1, 2];

    return (
        <CardInfo>
            <ImageContainer>
                <Image src={image} alt={alt} />
                <DotsContainer>
                    {dots.map((index) => (
                        <Dot
                            key={index}
                            active={activeDot === index}
                            onClick={() => setActiveDot(index)}
                        />
                    ))}
                </DotsContainer>
            </ImageContainer>
            <Title>{title}</Title>
            <Location>{location} <span><strong>Diária:</strong> {price}</span></Location>
            <Description>{description}</Description>
            <VideoButton><IconCamera />Video visita</VideoButton>
        </CardInfo>
    );
};

export default Card