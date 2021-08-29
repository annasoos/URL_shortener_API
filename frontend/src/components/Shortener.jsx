import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import shortenerBG from "../images/bg-shorten-desktop.svg";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import LinkList from './LinkList';

const Shortener = () => {
	const [longLink, setLongLink] = useState("");
	const [linkList, setLinkList] = useState([]);

	useEffect(() => {
		localStorage.setItem("linkList", JSON.stringify(linkList));
    setLinkList(JSON.parse(localStorage.getItem("linkList")));
  }, []);

	useEffect(() => {
		localStorage.setItem("linkList", JSON.stringify(linkList));
	}, [linkList]);

	async function shortenLink(link) {

		const body = { "long_url": longLink, "domain": "bit.ly" };
		const headers = {
			'Authorization': 'Bearer d089090cf1f3626904ca7c990d69b89b723a841b',
			'Content-Type': 'application/json'
		}
		try {
			const response = await axios.post(`https://api-ssl.bitly.com/v4/shorten`, body, { headers: headers })
			let res = await response;
			document.querySelector("#url").value = "";
			return setLinkList((oldList) => [...oldList, {original: longLink, short: res.data.link}])
		}
		catch (e) {
			toast.error('Oops..something went wrong. Please try again!', { position: toast.POSITION.BOTTOM_CENTER, theme: "colored" });
		}
	}

	return (
		<>
			<ShortenerContainer>
				<ShortenerContent>
					<Input type="url" name="url" id="url" autoComplete="off" placeholder="Shorten a link here..." pattern="https://.*" required onChange={(e) => setLongLink(e.target.value)}></Input>
					<Button onClick={(e) => longLink !== "" && shortenLink(longLink) }> Shorten it! </Button>
				</ShortenerContent>
			</ShortenerContainer>

			{linkList.map((link, index) => (
				<LinkList data={link} index={index}/>
			))}
		</>
	)
}

const ShortenerContainer = styled.section`
	width: 80%;
	height: 10rem;
	padding: 0 2rem;
	position: absolute;
	left: 50%;
	top: -5rem;
	transform: translateX(-50%);

	background-image: url(${shortenerBG});
	background-color: hsl(257, 27%, 26%);
	border-radius: 10px;

	z-index: 1;

	@media only screen and (max-width: 1090px) {
		padding: 0 1.5rem;
	};
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
	font-size: 1rem;
	font-weight: 700;
	height: 2.5rem;
	text-indent: 1rem;

	border-radius: 10px;
	width: 80%;
	background-color: white;
	color: hsl(255, 11%, 22%);

	transition: all 1s ease-in-out;

		@media only screen and (max-width: 1090px) {
			text-align: center;
			font-size: 1rem;
			width: 100%;
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
	font-size: 1rem;
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

	@media only screen and (max-width: 1090px) {
		width: 100%;
	};
`;

export default Shortener
