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
	position: relative;
  width: 100%;
	height: auto;
	min-height: 50%;
  padding: 0 10%;
	border: 1px solid white;  /*need this line to got the right image position in mobile view -- TODO: reorganize and have relative position to image so it can be included in the auto height of the section */
`;

const Title = styled.h1`
	width: 40%;
  font-size: 80px;
	font-weight: 700;
	letter-spacing: -0.05em;
  color: hsl(255, 11%, 22%);
	transition: all 1s ease-in-out;

	
	@media only screen and (max-width: 1200px) {
		font-size: 65px;
	};

	@media only screen and (max-width: 1090px) {
		font-size: 50px;
		width: 100%;
		text-align: center;
		margin-top: 65%;
		padding-top: 5rem;
	};

	@media only screen and (max-width: 425px) {
		font-size: 40px;
	};

	@media only screen and (max-width: 300px) {
		font-size: 35px;
	};

`;

const Text = styled.p`
	width: 40%;
  font-size: 22px;
	color: hsl(257, 7%, 63%);
	padding: 2rem 0;
	transition: all 1s ease-in-out;


	@media only screen and (max-width: 1090px) {
		font-size: 20px;
		width: 100%;
		text-align: center;
	};

`;

const Button = styled.button`
	font-size: 18px;
	font-weight: 700;

	position: relative;
	left: 0;
	height: 2.5rem;
	width: 10rem;
	margin-top: 1rem;

  color: white;
	background-color: hsl(180, 66%, 49%);
	border-radius: 20px;

	transition: left 1s ease-in-out;

  &:hover{
		background-color: hsla(180, 66%, 49%, 0.5);
	}

	@media only screen and (max-width: 1090px) {
		left: 50%;
		transform: translateX(-50%);
	};
`;

const HeroImg = styled.img`
  position: absolute;
	width: auto;
	max-width: 80%;
	right: -7%;
	top: 5%;
	z-index: -1;
	transition: all 1s ease-in-out;

	@media only screen and (max-width: 1090px) {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	};

`

export default Hero;
