import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { items, sellers } from "../data";

function ItemDetails() {
	const { itemId } = useParams();
	const item = items[itemId];
	return (
		<div>
			<div>
				<Stuff>
					<div>
						<Image src={item.imageSrc} />
					</div>
					<StuffRight>
						<ItemName>{item.name}</ItemName>
						<LatinName>{item.latinName}</LatinName>

						<Desc>{item.description}</Desc>
						<Country>
							Country of Origin: <Bold> {item.countryOfOrigin} </Bold>{" "}
						</Country>
						<p>Sold By: {item.sellerId}</p>
						<ItemButton>${item.price} - Buy Now!</ItemButton>
					</StuffRight>
				</Stuff>
			</div>
		</div>
	);
}

export default ItemDetails;

const Stuff = styled.div`
	display: flex;
	margin-right: 30%;
	margin-left: 10%;
`;

const StuffRight = styled.div`
	margin-left: 50px;
`;

const Desc = styled.p``;

const ItemName = styled.h1`
	font-size: 55px;
	margin-top: 0;
	margin-bottom: 0;
`;

const LatinName = styled.h2`
	font-style: italic;
	font-size: 25px;
	margin-top: 0;
`;

const Country = styled.div`
	font-style: italic;
`;

const Bold = styled.span`
	font-weight: bolder;
`;

const ItemButton = styled.button`
	background-color: lightcoral;
	border-radius: 5px;
	border: blue;
	padding: 5px;
	font-size: 35px;
	color: white;
	width: 375px;
`;

const Image = styled.img`
	height: 275px;
	width: 275px;
	border-radius: 15px;
`;
