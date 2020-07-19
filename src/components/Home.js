import React from "react";
import styled from "styled-components";
import ListingGrid from "./ListingGrid";
import { items } from "../data";

function Home() {
	return (
		<div>
			<Body>
				Fruit emporium sells the finest fruits from this world and beyond.
			</Body>

			<Para>Browse items:</Para>

			<ListingGrid itemList={Object.values(items)} />
		</div>
	);
}

const Body = styled.p`
	font-family: Arial, Helvetica, sans-serif;
	margin-left: 15px;
	font-size: 20px;
`;

const Para = styled.p`
	font-family: Arial, Helvetica, sans-serif;
	font-weight: bold;
	margin-left: 15px;
	font-size: 25px;
`;

export default Home;
