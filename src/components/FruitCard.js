import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function FruitCard({ name, latinName, imageSrc, id }) {
	return (
		<div>
			<Link to={`/items/${id}`}>
				<img src={imageSrc} />
			</Link>
			<h6>{name}</h6>
			<small>{latinName}</small>
		</div>
	);
}

export default FruitCard;
