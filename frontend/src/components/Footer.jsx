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
			<LogoLink href="#"><img src={ShortlyLogo} alt="shortly_logo" /></LogoLink>
			<LinkContainer>
				<h3> Features </h3>
				<li><a href="#">Link Shortening</a></li>
				<li><a href="#">Branded Links</a></li>
				<li><a href="#">Analitycs</a></li>
			</LinkContainer>
			<LinkContainer>
				<h3> Resources</h3>
				<li><a href="#">Blog</a></li>
				<li><a href="#">Developers</a></li>
				<li><a href="#">Support</a></li>
			</LinkContainer>
			<LinkContainer>
				<h3> Company </h3>
				<li><a href="#">About</a></li>
				<li><a href="#">Our Team</a></li>
				<li><a href="#">Carreers</a></li>
				<li><a href="#">Support</a></li>
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
	padding: 5rem 10%;

	display: grid;
	grid-template-columns: 30% 18% 18% 18% auto;
	grid-template-rows: 1fr;
	grid-column-gap: 0px;
	grid-row-gap: 0px;

  background-color: hsl(255, 11%, 22%);
`

const LogoLink = styled.a`
	cursor: auto;
	
	& img:hover{
	filter: invert(56%) sepia(76%) saturate(400%) hue-rotate(131deg) brightness(101%) contrast(94%);
	cursor: pointer
	}
`

const LinkContainer = styled.ul`

	& li {
		color: white;
		font-weight: 300;

		&:hover{
		color: hsl(180, 66%, 49%);
		}
	};

	& h3 {
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
