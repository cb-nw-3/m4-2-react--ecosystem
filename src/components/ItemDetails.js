import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { sellers, items } from '../data';
import Button from './Button';

const ItemDetails = () => {
  const { itemId } = useParams();

  const currentItem = items[itemId];
  const seller = sellers[currentItem.sellerId];

  const itemInStock = currentItem.quantity > 0;

  return (
    <Wrapper>
      <BigPic src={currentItem.imageSrc} />
      <Details>
        <Name>{currentItem.name}</Name>
        <LatinName>{currentItem.latinName}</LatinName>
        <Description>{currentItem.description}</Description>
        <CountryOfOrigin>
          Product of <strong>{currentItem.countryOfOrigin}</strong>
        </CountryOfOrigin>

        {itemInStock ? (
          <Button>${currentItem.price} - Buy now</Button>
        ) : (
          <OutOfStock>Out of Stock</OutOfStock>
        )}

        <SellerInfo>
          <SellerImg src={seller.avatarSrc} alt="portrait of store owner" />
          <span>
            Sold by:
            <StoreName>{seller.storeName}</StoreName>
          </span>
        </SellerInfo>
      </Details>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const BigPic = styled.img`
  display: block;
  width: 350px;
  height: 360px;
  border-radius: 15px;
`;

const Details = styled.section`
  flex: 1;
  margin-left: 50px;
`;

const Name = styled.h3`
  font-size: 30px;
  color: black;
`;

const LatinName = styled.h5`
  color: grey;
  font-style: italic;
  font-size: 20px;
  font-weight: 500;
`;

const Description = styled.div`
  margin-top: 30px;
`;
const CountryOfOrigin = styled.div`
  margin-top: 15px;
  margin-bottom: 10px;
  font-style: italic;
  color: grey;
`;

const SellerInfo = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 15px;
`;

const SellerImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
`;

const StoreName = styled.span`
  font-weight: bold;
  padding-left: 10px;
  padding-right: 30px;
`;

const OutOfStock = styled.div`
  padding: 20px;
  margin-top: 10px;
  color: red;
  font-style: italic;
  border: 5px dashed;
  text-align: center;
  border-radius: 15px;
`;

export default ItemDetails;
