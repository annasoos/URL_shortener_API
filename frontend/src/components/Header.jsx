import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import styled from "styled-components";
import ShortlyLogo from "../images/logo.svg"

const Header = () => {
	return (
		<Router>
			<div>
				<NavBar>
					<ul>
						<li id="logoLink">
							<img id="logoSVG" src={ShortlyLogo} alt="shortly_logo" />
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
						<li>
							<Link id="signup" to="/signup">Sign Up</Link>
						</li>
					</ul>
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
		</Router>
	)
}

const NavBar = styled.nav`

	width: 100%;
	height: 7rem;
	padding: 5rem 10%;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	font-weight: 500;
	text-align: center;
	
	& ul {
		width: 30%;
  	display: flex;
		flex: auto;
  	flex-direction: row;
		justify-content: flex-end;
		align-items: center;

		color: hsl(257, 7%, 63%);

		&:first-of-type{
			justify-content: flex-start;

			& #logoLink{
				width: 10rem;
			}
		}

		& li{
			padding: 0.45rem 1.5em;

			&:first-of-type{
			padding-left: 0;
			}

			& a{
			font-weight: 500;

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
	}

`

export default Header
