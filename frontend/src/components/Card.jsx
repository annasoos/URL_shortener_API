import React from "react";
import styled from "styled-components";

const Card = ({ header, text, image, id }) => {
	return (
			<CardContent id={id}>
				<CardImg src={image} alt="icon" />
				<CardTitle> {header} </CardTitle>
				<CardText>{text}</CardText>
			</CardContent>
	);
};

const CardContent = styled.div`
	width: 31%;
	height: 14rem;
	background-color: white;
	padding: 2rem 2rem;
	z-index: 1;


	&#second{
		position: relative;
		top: 2rem;
	}

	&#third{
		position: relative;
		top: 4rem;
	}
`

const CardTitle = styled.h4`
	color: hsl(257, 27%, 26%);
	font-size: 1.2rem;
	position: relative;
	top: -2rem;
`

const CardText = styled.p`
	font-size: 0.8rem;
	color: hsl(257, 7%, 63%);
	position: relative;
	top: -1rem;
`

const CardImg = styled.img`
	background-color: hsl(257, 27%, 26%);
	border-radius: 100%;
	padding: 5%;

	position: relative;
	top: -3.5rem;
`

export default Card;

