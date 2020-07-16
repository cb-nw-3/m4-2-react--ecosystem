import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header(props) {
	return (
		<Nav>
			<h1>Fruit Emporium</h1>
			<Navdiv>
				<Link style={{ textDecoration: "none" }} to="/">
					Home
				</Link>

				<Link style={{ textDecoration: "none", marginLeft: '30px' }} to="/about">
					About
				</Link>
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
	margin-right: 50px;
`;

export default Header;
