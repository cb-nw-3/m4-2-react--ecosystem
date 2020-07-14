import React from "react";
import { useParams } from "react-router-dom";
import { items, sellers } from "../data";
import styled from "styled-components";

const ItemDetails = () => {
  const { itemId } = useParams();
  const fruitArray = Object.values(items);
  const fruitData = fruitArray.find((fruit) => {
    if (fruit.id === itemId) {
      return fruit;
    }
  });
  const sellerName = fruitData.sellerId;
  const sellerData = sellers[sellerName];
  return (
    <FruitContainer>
      <FruitImage src={fruitData.imageSrc}></FruitImage>
      <TextContainer>
        <FruitTitle>{fruitData.name}</FruitTitle>
        <FruitSubtitle>{fruitData.latinName}</FruitSubtitle>
        <FruitDescription>{fruitData.description}</FruitDescription>
        <Country>
          Product of <strong>{fruitData.countryOfOrigin}</strong>
        </Country>
        <BuyButton>${fruitData.price} - Buy Now</BuyButton>
        <SellerContainer>
          <SellerImage src={sellerData.avatarSrc} />
          <SoldBy>Sold by: {sellerData.storeName}</SoldBy>
        </SellerContainer>
      </TextContainer>
    </FruitContainer>
  );
};

const FruitContainer = styled.div`
  margin: 30px 0;
  display: flex;
  flex: 1;
  max-width: 100%;
  max-height: 80%;
`;
const FruitImage = styled.img`
  flex: 1;
  object-fit: cover;
  height: 400px;
  width: 400px;
  border-radius: 20px;
`;
const TextContainer = styled.div`
  flex: 1;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
`;

const Country = styled.h3`
  color: grey;
  font-style: italic;
  font-weight: 400;
  margin: 0 0 70px 0;
`;

const BuyButton = styled.button`
  background: #4600e0;
  border-radius: 10px;
  color: white;
  width: 200px;
  border: 0px;
  font-size: 1em;
  padding: 20px 40px;
  margin-bottom: 40px;
`;
const SoldBy = styled.h3`
  color: black;
`;
const FruitTitle = styled.h1`
  color: black;
  margin: 0;
`;
const FruitSubtitle = styled.h3`
  color: grey;
  font-style: italic;
  margin: 0;
`;
const SellerImage = styled.img`
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
`;
const SellerContainer = styled.div`
  display: flex;
  align-items: center;
`;
const FruitDescription = styled.h3``;

export default ItemDetails;
