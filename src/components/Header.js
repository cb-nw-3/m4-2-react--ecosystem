import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header(props) {
	return (
		<Nav>
			<h1>Fruit Emporium</h1>
			<Navdiv>
				<LinkTest to="/">
					Home
				</LinkTest>

				<LinkTest to="/about">
					About
				</LinkTest>
			</Navdiv>
		</Nav>
	);
}

const LinkTest = styled(Link)`
	text-decoration: none;
	margin-right: 30px;
	color: lightcoral;
	font-size: 40px;
`;


const Nav = styled.header`
	font-family: Arial, Helvetica, sans-serif;
	display: flex;
	align-items: center;
	font-size: 30px;
	justify-content: space-between;
	margin-left: 15px;	
`;

const Navdiv = styled.span`
	font-size: 25px;
	margin-right: 50px;
`;

export default Header;
