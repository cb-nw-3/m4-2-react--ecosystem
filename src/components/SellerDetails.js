import React from 'react';
import { useParams } from 'react-router-dom';
import { sellers, items } from '../data';
import styled from 'styled-components';
import ListingGrid from './ListingGrid';

const SellerDetails = (props) => {
    const { sellerId } = useParams();
    const sellerInfo = sellers[sellerId];
    return (
      <SellerContainer>
        <SellerImgContainer>
          <SellerImage src={sellerInfo.avatarSrc} /> 
        </SellerImgContainer>    
        <SellerInfoContainer>
          <SellerName>{sellerId}</SellerName>
          <SellerStoreName>{sellerInfo.storeName}</SellerStoreName>
          <SellerDescription>What We Carry: {sellerInfo.description}</SellerDescription>
          <SellerProducts>
            <ListingGrid itemList={props.array[1]}/>
          </SellerProducts>
        </SellerInfoContainer>
      </SellerContainer>
    )
  };

const SellerContainer = styled.div`
  display:flex;
  margin: 20px;
`;

const SellerImgContainer = styled.div`
  margin-right: 60px;
`;

const SellerImage = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 10px;
`;

const SellerInfoContainer = styled.div`
  text-align:left;
`;

const SellerName = styled.p`
  font-size: 40px;
  font-weight: 900;
  margin-top: 0px;
`;

const SellerStoreName = styled.p`
  font-size: 28px;
  color: #2d2d2d;
`;

const SellerDescription = styled.p`
  font-size: 20px;
`;

const SellerProducts = styled.div`
  display:block;
`

export default SellerDetails;