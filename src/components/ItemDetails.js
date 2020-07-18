import React from "react";
import { useParams } from 'react-router-dom';

import styled from 'styled-components';
import { sellers, items } from '../data';

function ItemDetails() {
  console.log('sellers', sellers);
  console.log('items', items);

  const { itemId } = useParams();
  console.log('itemId', itemId);

  const item = items[itemId];
  console.log('item', item)

  let buttonValue = ''
  if (item.quantity > 0) {
    buttonValue = `${item.price} $ - Buy now`;
  } else {
    buttonValue = `Out of stock`;
  }

  return <StyledContainer>
    <div>
      <StyledImage src={item.imageSrc}></StyledImage>
    </div>
    <StyledInformation>
      <StyledEnglishName>{item.name}</StyledEnglishName>
      <StyledLatinName>{item.latinName}</StyledLatinName>
      <StyledDescription>{item.description}</StyledDescription>
      <StyledProvenance>Product of <Bold>{item.countryOfOrigin}</Bold></StyledProvenance>
      <StyledButton>{buttonValue}</StyledButton>
      <StyledSeller>
        <StyledImageSeller src={sellers[item.sellerId].avatarSrc}></StyledImageSeller>
        <StyledSellerInfo>
          Sold by: 
          <Bold>{sellers[item.sellerId].storeName}</Bold>
        </StyledSellerInfo>
      </StyledSeller>
    </StyledInformation>
  </StyledContainer>
}

const StyledImage = styled.img`
  width: 350px;
  border-radius: 15px;
`

const StyledContainer = styled.div`
  width: 750px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
`

const StyledInformation = styled.div`
  width: 350px;
`
const StyledDescription = styled.p`
  font-size: 20px;
`
const StyledProvenance = styled.p`
  font-size: 18px;
  font-style: italic;
`
const StyledButton = styled.button`
  background-color: blue;
  width: 200px;
  border-radius: 10px;
  height: 50px;
  border: none;
  margin: 20px 0;
  color: white;
  font-size: 20px;
  font-weight: bold;
`
const StyledSeller = styled.div`
  display: flex;
`
const StyledImageSeller = styled.img`
  width: 50px;
  border-radius: 50%;
`
const StyledSellerInfo = styled.p`
  margin-left: 20px;
`
const Bold = styled.span`
  font-weight: bold;
`
const StyledEnglishName = styled.h2`
  margin: 0;
  font-size: 32px;
`
const StyledLatinName = styled.p`
  color: lightgray;
  font-style: italic;
  font-size: 20px;
  margin-top: 0;
`
export default ItemDetails;