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
        <BuyButton>${currentItem.price} - Buy now</BuyButton>
        <SellerInfo>
          <Avatar src={sellers[currentItem.sellerId].avatarSrc} />
          Sold by: <strong>Fruit Bazaar, by {sellerName}</strong>{" "}
        </SellerInfo>
      </ItemInfo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const FruitImage = styled.img`
  width: 500px;
  border-radius: 20px;
  margin-top: 20px;
`;

const FruitName = styled.h2`
  font-size: 24px;
  font-weight: 1000;
  text-align: center;
`;

const LatinName = styled.p`
  font-size: 16px;
  font-style: italic;
  text-align: center;
  margin-bottom: 20px;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.p``;

const Origin = styled.p`
  font-style: italic;
  & strong {
    font-weight: 800;
  }
`;

const BuyButton = styled.button`
  border-radius: 10px;
`;

const SellerInfo = styled.div``;

const Avatar = styled.img`
  border-radius: 50%;
  height: 35px;
`;

export default ItemDetails;
