import React from 'react';
import styled from "styled-components";
import Card from "./Card";
import recognitionImage from "../images/icon-brand-recognition.svg";
import customizableImage from "../images/icon-fully-customizable.svg";
import recordsImage from "../images/icon-detailed-records.svg";

const Statistics = () => {

	const cards = [
		{
			header: "Brand Recognition",
			text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
			image: recognitionImage,
			id: "first"
		},
		{
			header: "Detailed Records",
			text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps you make more informed decisions.",
			image: recordsImage,
			id: "second"
		},
		{
			header: "Fully Customizable",
			text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
			image: customizableImage,
			id: "third"
		},
	];

	return (
		<StatSection>
			<Title>Advanced Statistics</Title>
			<Text>Track how your links are performing across the web with our advanced statistics dashboard.</Text>

			<CardContainer>
				{cards.map((card, index) => (
					<Card index={index} {...card} /> //pass an object with all the properties as separate prop
				))}
			</CardContainer>

			<BlueLine />

		</StatSection>
	);
};


const StatSection = styled.section`
  width: 100%;
  height: 110%;
	position: relative;
  padding-top: 10rem;

	background-color: hsl(230, 25%, 95%);
`;

const Title = styled.h1`
	width: 35%;
  font-size: 40px;
	font-weight: 700;
  color: hsl(260, 8%, 14%);
	text-align: center;
	padding-bottom: 1rem;

	position: relative;
	left: 50%;
	transform: translateX(-50%);
`;

const Text = styled.p`
	width: 35%;
  font-size: 1rem;
	color: hsl(257, 7%, 63%);
	text-align: center;

	position: relative;
	left: 50%;
	transform: translateX(-50%);
`;

const CardContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	position: relative;
	left: 50%;
	transform: translateX(-50%);

	width: 70%;
	margin-top: 5rem;
	z-index: 1;
`

const BlueLine = styled.div`
	height: 6px;
	width: 50%;
	background-color: hsl(180, 66%, 49%);

	position: absolute;
	bottom: 33%;
	left: 50%;
	transform: translateX(-50%);
`


export default Statistics
