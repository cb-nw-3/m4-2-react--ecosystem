import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function FruitCard({ name, latinName, imageSrc, id }) {
	return (
		<Div>
			<Link to={`/items/${id}`}>
				<FruitPic src={imageSrc} />
			</Link>
			<FruitName>{name}</FruitName>

			<Small>{latinName}</Small>
		</Div>
	);
}

const Div = styled.div`
	margin-bottom: 25px;
	margin-top: 25px;
	margin-left: 75px;
	margin-right: 150px;
	display: inline-block;
	text-align: center;
`;

const FruitPic = styled.img`
	border-radius: 10px;
	width: 200px;
	box-shadow: 2px 5px 36px rgba(100, 100, 100);
`;

const FruitName = styled.h6`
	margin: 0;
	margin-top: 5px;
	font-size: 22px;
`;

const Small = styled.small`
	margin-bottom: 25px;
	font-size: 18px;
	font-style: italic;
`;

export default FruitCard;
