import React from "react";
import styled from "styled-components";
import ShortlyLogo from "../images/logo-footer.svg"
import Facebook from "../images/icon-facebook.svg";
import Instagram from "../images/icon-instagram.svg";
import Twitter from "../images/icon-twitter.svg";
import Pinterest from "../images/icon-pinterest.svg";

const Footer = () => {

	const items = [
		{
			name: "Features",
			links: [
				{ linkName: "Link Shortening", path: "#" },
				{ linkName: "Branded Links", path: "#" },
				{ linkName: "Analytics", path: "#" },
			],
		},
		{
			name: "Resources",
			links: [
				{ linkName: "Blog", path: "#" },
				{ linkName: "Developers", path: "#" },
				{ linkName: "Support", path: "#" },
			],
		},
		{
			name: "Company",
			links: [
				{ linkName: "About", path: "#" },
				{ linkName: "Our Team", path: "#" },
				{ linkName: "Careers", path: "#" },
				{ linkName: "Contact", path: "#" },
			],
		},
	];

	const socialIcons = [
		{
			name: "Facebook",
			icon: Facebook,
		},
		{
			name: "Twitter",
			icon: Twitter,
		},
		{
			name: "Pinterest",
			icon: Pinterest,
		},
		{
			name: "Instagram",
			icon: Instagram,
		},
	];


	return (
		<FooterContainer>

			<LogoLink href="#"><img src={ShortlyLogo} alt="shortly_logo" /></LogoLink>

			{items.map((item, index) =>
				<LinkContainer key={index}>
					<h3> {item.name} </h3>
					{item.links.map((link, index) =>
						<li key={index}><a href={link.path}>{link.linkName}</a></li>
					)}
				</LinkContainer>
			)}

			<SocialContainer>
				{socialIcons.map((icon, index) =>
					<SocialIcon src={icon.icon} alt={icon.name} key={index} />
				)}
			</SocialContainer>

		</FooterContainer>
	);
};

const FooterContainer = styled.section`
	width: 100%;
  min-height: 40%;
	height: auto;
	padding: 5rem 10%;

	display: grid;
	grid-template-columns: 30% 18% 18% 18% auto;

  background-color: hsl(255, 11%, 22%);
	transition: all 1s ease-in-out;

	@media only screen and (max-width: 1000px) {
		height: auto;
		grid-template-columns: 33% 33% 33%;
	};

	@media only screen and (max-width: 600px) {
		height: auto;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(5, 1fr);
		place-items: center;
		padding: 0 10%;
	};
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
		padding-bottom: 1rem;

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
	justify-content: center;
	width: 100%;
	transition: all 1s ease-in-out;

	@media only screen and (max-width: 1000px) {
		grid-column-start: 1;
  	grid-column-end: 2;
  	grid-row-start: 2;
  	grid-row-end: 3;
	};

	@media only screen and (max-width: 600px) {
		grid-column-start: 1;
  	grid-column-end: 2;
  	grid-row-start: 5;
  	grid-row-end: -1;
	};
`

const SocialIcon = styled.img`
	height: 24px;
	padding-right: 1.3rem;
	cursor: pointer;

	&:hover{
    filter: invert(56%) sepia(76%) saturate(400%) hue-rotate(131deg) brightness(101%) contrast(94%);
	}
`


export default Footer
