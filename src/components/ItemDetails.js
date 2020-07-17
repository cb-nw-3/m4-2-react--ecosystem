import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { items } from '../data';
import { sellers } from '../data';

const CardWrapper = styled.div`
  display: flex;
  padding: 0 5%;
  margin-top: 3%;
  /* justify-content: center; */
`;

const ItemImg = styled.img`
  width: 350px;
  height: 400px;
  border-radius: 20px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4%;
`;

const ItemName = styled.h1`
  font-size: 2.7rem;
  font-weight: bolder;
`;

const ItemLatinName = styled.h2`
  color: grey;
  opacity: 0.8;
  font-style: italic;
  font-size: 22px;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0;
`;

const TextOrigin = styled.p`
  font-size: 18px;
  margin: 20px 0 40px;
  font-style: italic;
`;

const Button = styled.button`
  width: 280px;
  height: 60px;
  border-radius: 10px;
  font-size: 22px;
  color: white;
  background: #4C0CD4;
  border: none;
  outline: none;
  font-family: 'Raleway', sans-serif;

  &:hover {
    background: #FF0073;
    font-weight: bold;
    outline: none;
    cursor: pointer;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const SellerWrapper = styled.div`
  display: flex;
  padding: 30px 0;
  align-items: center;
`;

const SellerImg = styled.img`
  width: 50px;
  border-radius: 100%;
  margin-right: 10px;
`;

const TextQuantity = styled.p`
  font-style: italic;
  margin: 10px 0;
`;



const ItemDetails = () => {
  
  //returns the :itemId from the url parameters
  const { itemId } = useParams();

  //from the { items } data, access the item's object via it's ID
  const item = items[itemId];
  const seller = sellers[item.sellerId];
  
  //console.log(item);

  return (
    <CardWrapper>
      <ItemImg src={item.imageSrc}></ItemImg>
      <CardContent>
        <ItemName>{item.name}</ItemName>
        <ItemLatinName>{item.latinName}</ItemLatinName>
        <Text>{item.description}</Text>
        <TextOrigin>
          Product of <strong>{item.countryOfOrigin}</strong>
        </TextOrigin>
        <Button>{`$${item.price} - Buy now`}</Button>
        <TextQuantity>{`quantity left: ${item.quantity}`}</TextQuantity>
        <SellerWrapper>
          <SellerImg src={seller.avatarSrc} />
          <p>Sold by: <strong>{seller.storeName}</strong> </p>
        </SellerWrapper>
      </CardContent>
    </CardWrapper>
  );
}

export default ItemDetails;