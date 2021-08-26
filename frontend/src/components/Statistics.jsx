import React from 'react';
import styled from "styled-components";

const Statistics = () => {
	return (
		<StatSection>
			<Title>Advanced Statistics</Title>
			<Text>Track how your links are performing across the web with our advanced statistics dashboard.</Text>
			
		</StatSection>
	);
};


const StatSection = styled.section`
  width: 100%;
  height: 100vh;
	position: relative;
  padding-top: 10rem;

	background-color: hsl(230, 25%, 95%);

`;

const Title = styled.h1`
	width: 40%;
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
	width: 40%;
  font-size: 18px;
	color: hsl(257, 7%, 63%);
	text-align: center;

	position: relative;
	left: 50%;
	transform: translateX(-50%);
`;


export default Statistics
