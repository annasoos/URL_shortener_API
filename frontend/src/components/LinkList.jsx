import React, {useState} from 'react';
import styled from "styled-components";

const LinkList = ({ data }) => {

	const [isClicked, setIsClicked] = useState("copy")
	const [text, setText] = useState("Copy")

	const copy = (e) => {
		setText("Copied!");
		setIsClicked("clicked");
		navigator.clipboard.writeText(data.short);
		setTimeout(() => {
			setText("Copy")
			setIsClicked("copy")
			e.target.blur();
		}, 2000);
	};

	return (
		<LinkListContainer>
			<ListItem>
				<span>{data.original}</span>
				<span className="shortLink">{data.short}</span>
				<Button className={isClicked} onClick={copy}> {text} </Button>
			</ListItem>
		</LinkListContainer>
	)
};

const LinkListContainer = styled.section`
	width: 80%;
	position: relative;
	top: -4rem;
	left: 50%;
	transform: translateX(-50%);
`

const ListItem = styled.div`
	display: grid;
	grid-template-columns: 5fr 1fr 1fr;
	grid-template-rows: 1fr;
	align-items: center;
	gap: 2rem;

	width: 100%;
	padding: 0.8rem 1.5rem;
	margin: 0.5rem 0;
	
	background-color: white;
	color: hsl(255, 11%, 22%);
	font-size: 0.9rem;
	font-weight: 700;
	border-radius: 10px;

	& .shortLink{
		color: hsl(180, 66%, 49%);

		@media only screen and (max-width: 1090px) {
			border-top: 1px solid hsl(0, 0%, 75%);
			padding-top: 1rem;
		};
	}

	@media only screen and (max-width: 1090px) {
		grid-template-rows: 1fr 1fr 1fr;
		grid-template-columns: 1fr;
		gap: 1rem;

		margin: 1rem 0;
	};

	@media only screen and (max-width: 500px) {
		font-weight: 700;
		font-size: 0.8rem;
	};

	@media only screen and (max-width: 400px) {
		font-weight: 700;
		font-size: 0.7rem;
		overflow-x: scroll;
	};
`

const Button = styled.button`
	&.copy {
		position: relative;
		font-size: 0.9rem;
		font-weight: 700;
		height: 2rem;
		width: 8rem;

  	color: white;
		background-color: hsl(180, 66%, 49%);
		border-radius: 10px;

		&:hover{
			background-color: hsla(180, 66%, 49%, 0.5);					
		};
	}

	&.clicked {
		font-size: 0.9rem;
		font-weight: 700;
		height: 2rem;
		width: 8rem;

  	color: white;
		background-color: hsl(257, 27%, 26%);
		border-radius: 10px;	
	};

	
	@media only screen and (max-width: 1090px) {
			width: 100%;		
		};
`;

export default LinkList
