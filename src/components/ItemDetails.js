import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { items, sellers } from "../data";

const ItemDetails = () => {
  const { itemId } = useParams();
  const currentItem = items[itemId];
  const firstLetter = currentItem.sellerId[0].toUpperCase();
  const sellerName = currentItem.sellerId.split("");
  sellerName.splice(0, 1, firstLetter);

  return (
    <Wrapper>
      <FruitImage src={currentItem.imageSrc} />
      <ItemInfo>
        <FruitName>{currentItem.name}</FruitName>
        <LatinName>{currentItem.latinName}</LatinName>
        <Description>{currentItem.description}</Description>
        <Origin>
          Product of <strong>{currentItem.countryOfOrigin}</strong>
        </Origin>
        {currentItem.quantity >= 1 && (
          <BuyButton>${currentItem.price} - Buy now</BuyButton>
        )}
        {currentItem.quantity === 0 && (
          <BuyButton>Sorry - Out of Stock!</BuyButton>
        )}
        <SellerInfo>
          <Avatar src={sellers[currentItem.sellerId].avatarSrc} />
          Sold by: <strong> Fruit Bazaar, by {sellerName}</strong>{" "}
        </SellerInfo>
      </ItemInfo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin: 0 75px;
`;

const FruitImage = styled.img`
  width: 350px;
  border-radius: 20px;
  margin-top: 20px;
`;

const ItemInfo = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
`;

const FruitName = styled.h2`
  font-size: 24px;
  font-weight: 1000;
  margin-bottom: 5px;
`;

const LatinName = styled.p`
  font-size: 16px;
  font-style: italic;
  margin-top: 0px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  margin-bottom: 15px;
`;

const Origin = styled.p`
  font-style: italic;
  margin-top: 0px;
  & strong {
    font-weight: 800;
  }
`;

const BuyButton = styled.button`
  border-radius: 10px;
  padding: 15px 50px;
  margin: 20px 0px;
  background-color: hsl(256deg, 100%, 44%);
  color: white;
  border: 0px;
`;

const SellerInfo = styled.div`
  display: flex;
  align-items: center;

  & strong {
    margin-left: 10px;
    font-weight: bold;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 35px;
  margin-right: 10px;
`;

export default ItemDetails;
