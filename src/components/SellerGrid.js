import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SellerGrid = ({ sellerList, itemList}) => {
    let sellerValues = Object.values(sellerList);
    // let itemValues = Object.values(itemList);
    return (
        <div>
          <SellerList>
            {sellerValues.map( (seller) => {
              return (
              <Seller>
                <Link to={`/sellers/${seller.id}`}>
                <SellerImage src={seller.avatarSrc}/>
                </Link>
                <SellerName>{seller.id}</SellerName>
                <SellerStoreName>{seller.storeName}</SellerStoreName>
              </Seller>
              );
           })}    
          </SellerList>
            
        </div>   
    )
}

const SellerList = styled.ul`
  text-align:center;
`
const Seller = styled.li`
  display: inline-block;
  width: 300px;
  text-align: center;
  margin: 0px 30px 30px 30px;
`
const SellerImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
`;

const SellerName = styled.h2`
  font-size: 24px;
  text-align: center;
  font-weight: bold;
`;

const SellerStoreName = styled.p`
  color: #6e2f9e;
`;

export default SellerGrid;