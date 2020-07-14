import React from "react";
import styled from "styled-components";
import ListingGrid from "./ListingGrid";
import { items } from "../data"

function Home() {
	return (
		<div>
			<p>
				Fruit emporium sells the finest fruits from this world and beyond.
				Browse items:
			</p>
            <ListingGrid
            itemList={Object.values(items)}
            />
		</div>
	);
}

export default Home;
