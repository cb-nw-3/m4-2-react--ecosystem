import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { items, sellers } from "../data";

const ItemDetails = () => {
  const { itemId } = useParams();

  const foundItem = items[itemId];
  const foundSeller = sellers[foundItem.sellerId];
  const itemIsInStock = foundItem.quantity > 0;

  return (
    <Wrapper>
      <StyledImg src={foundItem.imageSrc}></StyledImg>
      <InfoWrapper>
        <div>
          <Name>{foundItem.name}</Name>
          <LatinName>{foundItem.latinName}</LatinName>
        </div>
        <p>{foundItem.description}</p>
        <Origin>
          Product of <strong>{foundItem.countryOfOrigin}</strong>
        </Origin>
        {itemIsInStock && (
          <StyledButton>${foundItem.price}- Buy now</StyledButton>
        )}
        {!itemIsInStock && <p>Sorry, out of stock</p>}
        <SellerInfo>
          <SellerImg src={foundSeller.avatarSrc} />
          <p>
            Sold by <strong>{foundSeller.storeName}</strong>
          </p>
        </SellerInfo>
      </InfoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin: 20px 65px;
`;

const StyledImg = styled.img`
  width: 50%;
  border-radius: 10px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px;
  justify-content: space-around;
`;

const Name = styled.h1`
  font-size: 2rem;
`;

const LatinName = styled.h2`
  color: grey;
  font-style: italic;
  font-size: 1rem;
  font-weight: 400;
`;

const Origin = styled.p`
  font-style: italic;
  color: grey;
`;

const StyledButton = styled.button`
  color: white;
  background-color: purple;
  width: 300px;
  padding: 15px 40px;
  border: none;
  border-radius: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
    color: pink;
  }
`;

const SellerInfo = styled.div`
  display: flex;
  align-items: center;
`;

const SellerImg = styled.img`
  width: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;
export default ItemDetails;
