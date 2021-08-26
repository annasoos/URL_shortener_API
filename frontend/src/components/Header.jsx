import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import styled from "styled-components";
import Hero from "./Hero";
import ShortlyLogo from "../images/logo.svg"

const Header = () => {
	return (
		<Router>
			<div>
				<NavBar>
					<ul>
						<li id="logoLink">
							<Link to="/"><img id="logoSVG" src={ShortlyLogo} alt="shortly_logo" /></Link>
						</li>
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
						<li id="signupBtn">
							<Link to="/signup">Sign Up</Link>
						</li>
					</ul>
				</NavBar>

				<Switch>
					<Route path="/">
						<Hero />
					</Route>
					<Route path="/features">
						<Hero />
					</Route>
					<Route path="/pricing">
						<Hero />
					</Route>
					<Route path="/resources">
						<Hero />
					</Route>
					<Route path="/login">
						<Hero />
					</Route>
					<Route path="/signup">
						<Hero />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

const NavBar = styled.nav`

	width: 100%;
	height: 7rem;
	padding: 5rem 5rem;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	text-align: center;

	border: 2px solid red;
	
	& ul {
		width: 30%;
  	display: flex;
		flex: auto;
  	flex-direction: row;
		justify-content: flex-end;
		align-items: center;

		color: hsl(0, 0%, 75%);
		font-weight: 500;

		&:first-of-type{
			justify-content: flex-start;

			& #logoLink{
				width: 10rem;
			}
		}

		& li{
			width: 8rem;
			line-height: 2.5rem;

			&:hover{
				color: black;
			}
		}
	}

		& #signupBtn {
			color: white;
			background-color: hsl(180, 66%, 49%);
			border-radius: 20px;

			&:hover{
				background-color: hsla(180, 66%, 49%, 0.5);
			}
		}
	}

`

export default Header
