import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import styled, { keyframes } from "styled-components";
import ShortlyLogo from "../images/logo.svg";

const Header = () => {

	const [hamMenu, setHamMenu] = useState("closed");
	const [hamIcon, setHamIcon] = useState("");

	const mobileMenu = () => {
		hamMenu === "open" ? setHamMenu("closed") : setHamMenu("open");
		hamIcon === "open" ? setHamIcon("closed") : setHamIcon("open");
	};


	return (
		<Router>
			<div>
				<NavBar>
					<img id="logoSVG" src={ShortlyLogo} alt="shortly_logo" />
					<ul>
						<li>
							<Link to="/features">Features</Link>
						</li>
						<li>
							<Link to="/pricing">Pricing</Link>
						</li>
						<li>
							<Link to="/resources">Resources</Link>
						</li>
					</ul>

					<ul>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link id="signup" to="/signup">Sign Up</Link>
						</li>
					</ul>

					<Hamburger id={hamIcon} onClick={mobileMenu}>
						<span className="bar"></span>
						<span className="bar"></span>
						<span className="bar"></span>
					</Hamburger>

					<HamburgerMenu id={hamMenu}>
						<Link className="dropdown" to="/features">Features</Link>
						<Link className="dropdown" to="/prices">Pricing</Link>
						<Link className="dropdow" to="/resources">Resources</Link>
						<hr />
						<Link className="dropdown" to="/login">Login</Link>
						<Link className="dropdown" to="/signup" id="mobileSignup">Sign Up</Link>
					</HamburgerMenu>

				</NavBar>

				<Switch>
					<Route path="/">

					</Route>
					<Route path="/features">

					</Route>
					<Route path="/pricing">

					</Route>
					<Route path="/resources">

					</Route>
					<Route path="/login">

					</Route>
					<Route path="/signup">

					</Route>
				</Switch>
			</div>
		</Router >
	)
}

const NavBar = styled.nav`

	width: 100%;
	height: 7rem;
	padding: 5rem 10%;

	position: relative;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	text-align: center;
	transition: all 1s ease-in-out;

	@media screen and (max-width: 1090px) {
    height: 5rem;
		padding: 3.5rem 10%;
  }

	& img {
		padding-right: 5rem;
	}
	
	& ul {
		width: 30%;
  	display: flex;
		flex: auto;
  	flex-direction: row;
		justify-content: flex-end;
		align-items: center;

		color: hsl(257, 7%, 63%);

		@media screen and (max-width: 1090px) {
    display: none;
  }

		&:first-of-type{
			justify-content: flex-start;
		}

		& li{
			padding: 0.45rem 1.5em;

			&:first-of-type{
			padding-left: 0;
			}

			& a{

				&:hover{
					color: black;
				}
			}
		}
	}

	& #signup {
		color: white;
		background-color: hsl(180, 66%, 49%);
		border-radius: 20px;
		padding: 0.45rem 1.5em;
		&:hover{
			background-color: hsla(180, 66%, 49%, 0.5);
		}
	}
`

const Hamburger = styled.div`
	display: none;
	cursor: pointer;

	@media screen and (max-width: 1090px) {
    display: block;
  }

	& span {
		display: block;
		width: 35px;
		height: 5px;
		margin: 6px auto;
		transition: all 0.3s ease-in-out;
		background-color: hsl(0, 0%, 75%);
		border-radius: 2px;
	}

	&#open span:nth-child(1) {
		transform: rotate(-45deg) translate(-9px, 6px);
	}

	&#open span:nth-child(2) {
  	opacity: 0;
	}

	&#open span:nth-child(3) {
  	transform: rotate(45deg) translate(-8px, -8px);
	}
`;

const HamburgerMenu = styled.div`
		opacity: 0;
		width: 80%;
		display: flex;
		flex-direction: column;
		background-color: hsl(257, 27%, 26%);
		border-radius: 10px;

		position: absolute;
		top: 6rem;

		z-index: 1;

		animation: hide 500ms;
		transition-duration: 500ms;
		transform-origin: top center;

		&#open{
			opacity: 1;
			animation: appear 500ms;
		}

		@media only screen and (min-width: 768px) {
		width: 40%;
		right: 10%;
		};

		& a {
		padding: 0.4rem 0.2rem;
		margin: 0.8rem 0.5rem;
    color: white;
		cursor: pointer;

			&:active{
				color: hsl(180, 66%, 49%);
			}
  	}

		& hr{
			height: 1px;
			width: 80%;
			background-color: hsl(257, 7%, 63%);

			position: relative;
			left: 50%;
			transform: translateX(-50%)
		}

		& #mobileSignup {
			color: white;
			background-color: hsl(180, 66%, 49%);
			border-radius: 20px;

			&:active{
				background-color: hsla(180, 66%, 49%, 0.5);
			}
		}
`;


export default Header