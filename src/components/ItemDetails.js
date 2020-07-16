import React from 'react';
import { useParams } from 'react-router-dom';
import { sellers, items } from '../data';
import styled from 'styled-components';

const ItemDetails = () => {
    const { itemId } = useParams();
    const itemInfo = items[itemId];
    const sellerInfo = sellers[itemInfo.sellerId];
    const isInStock = itemInfo.quantity > 0;
    return (
      <ItemContainer>
        <ImageContainer>
          <FruitImage src={itemInfo.imageSrc} /> 
        </ImageContainer>    
        <FruitInfoContainer>
          <FruitName>{itemInfo.name}</FruitName>
          <FruitLatin>{itemInfo.latinName}</FruitLatin>
          <FruitDescription>{itemInfo.description}</FruitDescription>
          <FruitOrigin><em>Product of <strong>{itemInfo.countryOfOrigin}</strong></em></FruitOrigin>
          { isInStock ? (
              <BuyNow>{`$${itemInfo.price} - Buy Now`}</BuyNow>
          ) : ( <NoBuy>Out Of Stock</NoBuy>)
          }
          <SellerInfo>
            <SellerImg src={sellerInfo.avatarSrc}/>
            <SellerStore>Sold by: <strong>{`${sellerInfo.storeName}`}</strong></SellerStore>
          </SellerInfo>
        </FruitInfoContainer>
      </ItemContainer>
    )
  };

const ItemContainer = styled.div`
  display:flex;
  margin: 20px;
`;

const ImageContainer = styled.div`
  margin-right: 60px;
`;

const FruitImage = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 10px;
`;

const FruitInfoContainer = styled.div`
  text-align:left;
`;
const FruitName = styled.p`
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 0px;
`;

const FruitLatin = styled.p`
  font-size: 16px;
  color: grey;
  margin-top: 0px;
  margin-bottom: 32px;
`;
const FruitDescription = styled.p`
  font-size: 16px;
`;
const FruitOrigin = styled.p`
  color: #505050;
  font-size: 16px;
`;
const BuyNow = styled.button`
  padding: 20px 80px;
  border-radius: 10px;
  background-color: #691ea7;
  color: white;
  font-size: 18px;
  border: 1px solid #691ea6;
  margin-top: 10px;
  margin-bottom: 30px;
  cursor: pointer;
`;
const NoBuy = styled.button`
  padding: 20px 80px;
  border-radius: 10px;
  background-color: #691ea7;
  color: white;
  font-size: 18px;
  border: 1px solid #691ea6;
  margin-top: 10px;
  margin-bottom: 30px;
  cursor: not-allowed;
`
const SellerInfo = styled.div`
  display:block;
`;

const SellerImg = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  vertical-align:middle;
`;

const SellerStore = styled.p`
  display:inline-block;
  margin-left: 15px;
`
export default ItemDetails;