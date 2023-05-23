import React from 'react'
import styled from 'styled-components'
import view1 from '../images/viewers-disney.png'
import view2 from '../images/viewers-marvel.png'
import view3 from '../images/viewers-national.png'
import view4 from '../images/viewers-pixar.png'
import view5 from '../images/viewers-starwars.png'
import video1 from '../video/videos/1564674844-disney.mp4'
import video2 from '../video/videos/1564676115-marvel.mp4'
import video3 from '../video/videos/1564676296-national-geographic.mp4'
import video4 from '../video/videos/1564676714-pixar.mp4'
import video5 from '../video/videos/1608229455-star-wars.mp4'


const Viewers = () => {
    return (
        <Container>
            <Wrap video={video1}>
                <img src={view1} alt='disney' />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src={video1} type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src={view2} alt='disney' />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src={video2} type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src={view3} alt='disney' />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src={video3} type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src={view4} alt='disney' />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src={video4} type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src={view5} alt='disney' />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src={video5} type='video/mp4' />
                </video>
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0px 26px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(5, minmax(0,1fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;

const Wrap = styled.div`
    padding-top: 56.25;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249,249,249,0.1);
    
    img{
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: relative;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
    }

    video{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        opacity: 0;
        z-index: 0;
        object-fit: cover;
    }

    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;

        transform: scale(1.05);
        border-color: rgba(249,249,249,0.8);

        video{
            opacity: 1;
            height: 100%;
            width: 100%;
            float: left;
            top: 0;
            padding: none;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
        }
    }
`;

export default Viewers