import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function ListingGrid({ itemList }) {
	return (
		<div>
			{itemList.map((item) => (
				<Link to={`/items/${item.id}`}>
					<div>{JSON.stringify(item)}</div>
				</Link>
			))}
			{/* Component Fruitcard() */}
		</div>
	);
}

export default ListingGrid;
