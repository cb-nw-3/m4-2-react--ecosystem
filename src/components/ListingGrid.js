import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FruitCard from "./FruitCard";

function ListingGrid({ itemList }) {
	return (
		<div>
			{itemList.map((item) => (
				<FruitCard
					name={item.name}
					latinName={item.latinName}
					imageSrc={item.imageSrc}
					id={item.id}
				/>
			))}
		</div>
	);
}

export default ListingGrid;
