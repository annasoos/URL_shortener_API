import React from "react";
import styled from "styled-components";
import Illustration from "../images/illustration-working.svg";

const Hero = () => {
	return (
		<HeroSection>
			<Title>More than just shorter links</Title>
			<Text>Build your brand's recognition and and get detaild insights on how your links are performing.</Text>
			<Button>Get Started</Button>
			<HeroImg src={Illustration} alt="illustration" />
		</HeroSection>
	);
};


const HeroSection = styled.section`
  width: 100%;
  height: calc(100vh - 7rem);
	position: relative;
  padding-top: 5%;
  padding-left: 10%;

`;

const Title = styled.h1`
	width: 40%;
  font-size: 80px;
	font-weight: 700;
	letter-spacing: -0.05em;
  color: hsl(260, 8%, 14%);
`;

const Text = styled.p`
	width: 40%;
  font-size: 22px;
	color: hsl(0, 0%, 75%);
`;

const Button = styled.button`
	font-size: 18px;
	font-weight: 700;
	height: 2.5rem;

  color: white;
	background-color: hsl(180, 66%, 49%);
	border-radius: 20px;
	width: 8rem;
	margin-top: 2.5rem;

  &:hover{
		background-color: hsla(180, 66%, 49%, 0.5);
	}
`;

const HeroImg = styled.img`
  position: absolute;
  right: -7%;
	top: 0;
  width: 50%;
	z-index: -1;
`

export default Hero;
