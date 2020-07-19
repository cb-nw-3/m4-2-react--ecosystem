import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { items, sellers } from "../data.js";

const ItemDetails = () => {
  const { itemId } = useParams();
  const seller = sellers[items[itemId].sellerId];
  const itemInStock = items[itemId].quantity > 0;
  return (
    <Item key={items[itemId]}>
      <div>
        <ItemImage src={items[itemId].imageSrc} />
      </div>
      <div>
        <ItemName>{items[itemId].name}</ItemName>
        <ItemLatin>{items[itemId].latinName}</ItemLatin>
        <ItemDesc>{items[itemId].description}</ItemDesc>
        <ItemOrigin>Product of {items[itemId].countryOfOrigin}</ItemOrigin>
        {itemInStock ? (
          <StyledButton>${items[itemId].price} - Buy Now</StyledButton>
        ) : (
          <StyledButton disabled={true}>Out of Stock</StyledButton>
        )}
        <Seller>
          <SellerAvatar src={seller.avatarSrc} />
          <SellerStore>
            Sold by: <strong>{seller.storeName}</strong>
          </SellerStore>
        </Seller>
      </div>
    </Item>
  );
};

const ItemImage = styled.img`
  height: 500px;
  width: 500px;
  padding: 20px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px 30px;
  border-radius: 10px;
  margin: 0 auto;
`;

const ItemName = styled.div`
  font-weight: bold;
  font-size: 2em;
  padding-top: 20px;
`;

const ItemLatin = styled.div`
  font-style: italic;
`;

const ItemDesc = styled.div`
  padding-top: 50px;
`;

const ItemOrigin = styled.div`
  font-style: italic;
  padding-top: 20px;
  padding-bottom: 50px;
`;

const StyledButton = styled.button`
  border-radius: 10px;
  width: 350px;
  height: 80px;
  background-color: mediumblue;
  color: white;
  font-size: 1.5em;

  & :disabled {
    background-color: grey;
    color: white;
  }
`;

const Seller = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
`;

const SellerAvatar = styled.img`
  border-radius: 50%;
  width: 35px;
`;

const SellerStore = styled.span`
  padding-top: 10px;
  padding-left: 10px;
`;

export default ItemDetails;
