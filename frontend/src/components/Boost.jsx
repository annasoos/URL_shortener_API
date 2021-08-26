import React from 'react';
import styled from "styled-components";
import boostBG from "../images/bg-boost-desktop.svg";

const Boost = () => {
	return (
		<BoostContainer>
			<BoostContent>
				<h1> Boost your links today </h1>
				<Button>Get started</Button>
			</BoostContent>
		</BoostContainer>
	)
}

const BoostContainer = styled.section`
	width: 100%;
	height: 250px;

	background-image: url(${boostBG});
	background-color: hsl(257, 27%, 26%);
`

const BoostContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	height: 100%;
	width: 50%;
	position: relative;
	left: 50%;
	transform: translateX(-50%);

	& h1{
		color: white;
		font-size: 2rem;
		text-align: center;
		padding-bottom: 1rem;
	}
`

const Button = styled.button`
	font-size: 1rem;
	font-weight: 700;
	height: 2.5rem;

  color: white;
	background-color: hsl(180, 66%, 49%);
	border-radius: 20px;
	width: 10rem;

  &:hover{
		background-color: hsla(180, 66%, 49%, 0.5);
	}
`;

export default Boost
