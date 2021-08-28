import React from 'react';
import styled from "styled-components";
import shortenerBG from "../images/bg-shorten-desktop.svg"

const Shortener = () => {
	return (
		<ShortenerContainer>
			<ShortenerContent>
				<Input type="url" name="url" id="url" autoComplete="off" placeholder="Shorten a link here..." pattern="https://.*" required></Input>
				<Button>Shorten it!</Button>
			</ShortenerContent>
		</ShortenerContainer>
	)
}

const ShortenerContainer = styled.section`
	width: 70%;
	height: 10rem;
	position: relative;
	left: 50%;
	top: 5rem;
	transform: translateX(-50%);

	background-image: url(${shortenerBG});
	background-color: hsl(257, 27%, 26%);
	border-radius: 10px;

	z-index: 1;
`

const ShortenerContent = styled.div`
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	transition: all 1s ease-in-out;

	@media only screen and (max-width: 1090px) {
		flex-direction: column;
	};
`

const Input = styled.input`
	font-size: 18px;
	font-weight: 700;
	height: 2.5rem;
	text-indent: 1rem;

	border-radius: 10px;
	width: 70%;
	margin: 0 1rem;
	background-color: white;
	color: hsl(255, 11%, 22%);

	transition: all 1s ease-in-out;

		@media only screen and (max-width: 1090px) {
			text-align: center;
			font-size: 1rem;
		};

		@media only screen and (max-width: 600px) {
			text-align: center;
			font-size: 0.8rem;
			text-indent: 0;
		};

	&::placeholder{
		width: 100%;
		color: hsl(0, 0%, 75%);
		font-weight: 500;

		@media only screen and (max-width: 1090px) {
			text-align: center
		};
	}

`

const Button = styled.button`
	font-size: 18px;
	font-weight: 700;
	height: 2.5rem;
	width: 10rem;

  color: white;
	background-color: hsl(180, 66%, 49%);
	border-radius: 10px;
	margin: 0 1rem;

  &:hover{
		background-color: hsla(180, 66%, 49%, 0.5);
	}
`;

export default Shortener
