import React from 'react';
import styled from 'styled-components';
import WaveOneLink from '../../src/res/wave.svg';
import WaveTwoLink from '../../src/res/wave (1).svg';
import IllustrationOne from '../../src/res/undraw_Credit_card_3ed6 (1).svg';
import IllustrationTwo from '../../src/res/undraw_segmentation_uioo.svg';
import Footer from '../../src/components/utils/Footer'; 

const BlueContainer = styled.div`
    background: #0b4f6c;
    padding: 3rem 2rem;
    margin: -1rem 0rem -0.5rem 0;
    text-align: center;
`;

const WhiteContainer = styled.div`
    background: transparent;
    padding: 5rem 2rem;

    @media screen and (min-width: 768px) {
        padding: 10rem 2rem;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-content: center;
    text-align: ${props => props.reverse ? "right" : "left"};

    @media screen and (min-width: 600px) {
        flex-flow: ${props => props.reverse ? "row-reverse" : "row"} nowrap;
        align-items: center;
        justify-content: space-between;
    }
    
    @media screen and (min-width: 800px) {
        width: 80%;
        margin: 0 auto;
    }

    @media screen and (min-width: 1440px) {
        width: 60%;
    }

    @media screen and (min-width: 2560px) {
        width: 40%;
    }
`;

const SectionHeading = styled.h2`
    font-size: 3.5rem;
    margin-bottom: 1rem;
    color: ${props => props.color};
`;

const SectionText = styled.p`
    font-size: 2rem;
    margin-bottom: 3rem;
    color: ${props => props.color};
`;

const SectionIllustration = styled.img`
    width: 70;

    @media screen and (min-width: 600px) {
        flex-flow: row nowrap;
        align-items: center;
        width: 60%;
        max-width: 30rem;
        margin: 0 3rem;
    }
    
    @media screen and (min-width: 1600px) {
        max-width: 40rem;
    }
`;

const Waves = styled.img`
    @media screen and (min-width: 1024px) {
        margin-top: -5rem;
        margin-bottom: -9rem;
    }
`;

const GoogleButton = styled.div`
    margin: 0 auto;
    display: inline-block;
`;

export default function HomePage() {
    return (
        <div>
            <Waves src={WaveOneLink} alt="Wave"/>
            <BlueContainer>
                <Wrapper>
                    <div>
                        <SectionHeading color="#79e5e5">EASILY TRACK YOUR EXPENSES</SectionHeading>
                        <SectionText color="#eee">Know how much you spend in a day, a month and a year with Spenser. Be it on food, on entertainment, on technology, or on leisure, you can create a category for that.</SectionText>
                    </div>
                    <SectionIllustration src={IllustrationOne} alt="Credit Cards"/>
                </Wrapper>
            </BlueContainer>
            <img src={WaveTwoLink} alt="Wave"/> 
            <WhiteContainer bg="transparent">
                <Wrapper reverse={true}>
                    <div>
                        <SectionHeading color="#0b4f6c">VISUALIZE THE FLOW OF YOUR MONEY</SectionHeading>
                        <SectionText color="#333">With graphs and lists showing where your money goes and which category takes up resources.</SectionText>
                    </div>
                    <SectionIllustration src={IllustrationTwo} alt="Credit Cards"/>
                </Wrapper>
            </WhiteContainer>
            <Waves src={WaveOneLink} alt="Wave"/>
            <BlueContainer>
                <SectionHeading color="#79e5e5">GET STARTED BELOW</SectionHeading>
                <SectionText color="#FBFBFF">Login or Sign Up using Google</SectionText>
                <GoogleButton className="g-signin2" data-onsuccess="onSignIn" />
            </BlueContainer>
            <img src={WaveTwoLink} alt="Wave"/>
            <Footer />
        </div>
    )
}