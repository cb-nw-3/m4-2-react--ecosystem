import React from "react";
import styled from "styled-components";
import ListingGrid from "./ListingGrid";
import { items } from "../data"

function Home() {
	return (
		<div>
			<Body>
				Fruit emporium sells the finest fruits from this world and beyond.
				Browse items:
			</Body>
            <ListingGrid
            itemList={Object.values(items)}
            />
		</div>
	);
}

const Body = styled.p`
	font-family: Arial, Helvetica, sans-serif;
	margin-left: 15px;
`;

export default Home;
