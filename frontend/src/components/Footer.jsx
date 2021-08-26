import React from "react";
import styled from "styled-components";
import ShortlyLogo from "../images/logo-footer.svg"
import Facebook from "../images/icon-facebook.svg";
import Instagram from "../images/icon-instagram.svg";
import Twitter from "../images/icon-twitter.svg";
import Pinterest from "../images/icon-pinterest.svg";

const Footer = () => {
	return (
		<FooterContainer>
			<a href="#"><img src={ShortlyLogo} alt="shortly_logo" /></a>
			<LinkContainer>
				<label> Features </label>
				<a href="#">Link Shortening</a>
				<a href="#">Branded Links</a>
				<a href="#">Analitycs</a>
			</LinkContainer>
			<LinkContainer>
				<label> Resources</label>
				<a href="#">Blog</a>
				<a href="#">Developers</a>
				<a href="#">Support</a>
			</LinkContainer>
			<LinkContainer>
				<label> Company </label>
				<a href="#">About</a>
				<a href="#">Our Team</a>
				<a href="#">Carreers</a>
				<a href="#">Support</a>
			</LinkContainer>
			<SocialContainer>
				<SocialIcon src={Facebook} alt="facebook" />
				<SocialIcon src={Twitter} alt="twitter" />
				<SocialIcon src={Pinterest} alt="pinterest" />
				<SocialIcon src={Instagram} alt="instagram" />
			</SocialContainer>
		</FooterContainer>
	);
};

const FooterContainer = styled.section`
	width: 100%;
  height: 40%;
	padding: 4rem 5rem;

	display: grid;
	grid-template-columns: 30% 18% 18% 18% auto;
	grid-template-rows: 1fr;
	grid-column-gap: 0px;
	grid-row-gap: 0px;

  background-color: hsl(255, 11%, 22%);

		& a:first-of-type{
			cursor: auto;
			
			& img:hover{
    	filter: invert(56%) sepia(76%) saturate(400%) hue-rotate(131deg) brightness(101%) contrast(94%);
			cursor: pointer
			}
		}
`

const LinkContainer = styled.div`
	display: flex;
  flex-direction: column;
	justify-content: flex-start;
	height: 100%;

	& a {
		color: white;
		margin-bottom: auto;

		&:hover{
		color: hsl(180, 66%, 49%);
		}
	};

	& label {
		color: white;
		font-weight: 700;
		padding-bottom: 1.3rem;
	};
`

const SocialContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	width: 100%;
`

const SocialIcon = styled.img`
	height: 24px;
	cursor: pointer;

	&:hover{
    filter: invert(56%) sepia(76%) saturate(400%) hue-rotate(131deg) brightness(101%) contrast(94%);
	}
`




export default Footer
