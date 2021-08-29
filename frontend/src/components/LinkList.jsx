import React from 'react';
import styled from "styled-components";

const LinkList = ({data, index}) => {
	return (
		<LinkListContainer>
			<ListItem key={index}>
				<span>{data.original}</span>
				<span className="shortLink">{data.short}</span>
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
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;

	padding: 0.8rem 1.5rem;
	margin: 0.5rem 0;
	
	background-color: white;
	color: hsl(255, 11%, 22%);
	font-size: 0.9rem;
	font-weight: 700;
	border-radius: 10px;

	& .shortLink{
		color: hsl(180, 66%, 49%);
	}
`

export default LinkList
