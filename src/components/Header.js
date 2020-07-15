import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header(props) {
	return (
		<Nav>
			<h1>Fruit Emporium</h1>
			<Navdiv>
				<Navleft>
					<Link to="/">Home</Link>
				</Navleft>
				<Navright>
					<Link to="/about">About</Link>
				</Navright>
			</Navdiv>
		</Nav>
	);
}

const Nav = styled.header`
    font-family: Arial, Helvetica, sans-serif;
	display: flex;
	align-items: center;
	justify-content: space-between;
    text-decoration: none;
`;

const Navdiv = styled.span`
	font-size: 25px;
`;

const Navright = styled.a`
	margin-left: 30px;
	margin-right: 25px;
`;

const Navleft = styled.a`
    color: blue;

/* Not working? */
`;

export default Header;
