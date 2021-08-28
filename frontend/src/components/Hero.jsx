import React from "react";
import styled from "styled-components";
import Illustration from "../images/illustration-working.svg";

const Hero = () => {
	return (
		<HeroSection>
			<Title>More than just shorter links</Title>
			<Text>Build your brand's recognition and get detailed insights on how your links are performing.</Text>
			<Button>Get Started</Button>
			<HeroImg src={Illustration} alt="illustration" />
		</HeroSection>
	);
};


const HeroSection = styled.section`
  width: 100%;
	height: 70%;
	max-height: 900px;
	position: relative;
  padding-top: 5%;
  padding-left: 10%;

	@media only screen and (min-width: 500px) and (max-width: 1090px) {
		height: 100%;
	};
`;

const Title = styled.h1`
	width: 40%;
  font-size: 80px;
	font-weight: 700;
	letter-spacing: -0.05em;
  color: hsl(260, 8%, 14%);
	transition: all 1s ease-in-out;

	
	@media only screen and (max-width: 1200px) {
		font-size: 65px;
	};

	@media only screen and (max-width: 1090px) {
		font-size: 50px;
		width: 100%;
		padding-right: 10%;
		text-align: center;
		margin-top: 65%;
	};

	@media only screen and (max-width: 425px) {
		font-size: 45px;
	};

	@media only screen and (max-width: 300px) {
		font-size: 35px;
	};

`;

const Text = styled.p`
	width: 40%;
  font-size: 22px;
	color: hsl(257, 7%, 63%);
	transition: all 1s ease-in-out;


	@media only screen and (max-width: 1090px) {
		font-size: 20px;
		width: 100%;
		padding-right: 10%;
		text-align: center;
	};

`;

const Button = styled.button`
	font-size: 18px;
	font-weight: 700;
	height: 2.5rem;

  color: white;
	background-color: hsl(180, 66%, 49%);
	border-radius: 20px;
	width: 10rem;
	margin-top: 2.5rem;

	transition: all 1s ease-in-out;

  &:hover{
		background-color: hsla(180, 66%, 49%, 0.5);
	}

	@media only screen and (max-width: 1090px) {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	};
`;

const HeroImg = styled.img`
  position: absolute;
	right: -7%;
	top: 5%;
  max-height: 80%;
	z-index: -1;
	transition: all 1s ease-in-out;


	@media only screen and (max-width: 1090px) {
		top: 5%;
		left: 50%;
		transform: translateX(-50%);
  	max-width: 80%;
	};

	@media only screen and (max-width: 992px) {
		max-height: 50%;
	};

	@media only screen and (max-width: 1200px) {
		max-height: 60%;
	};
`

export default Hero;
