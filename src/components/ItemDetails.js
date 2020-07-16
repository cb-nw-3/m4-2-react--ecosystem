import React from "react";
import { useParams } from "react-router-dom";
import { items, sellers } from "../data";
import styled from "styled-components";
import Header from "./Header";

const products = Object.values(items);
const productSellers = Object.values(sellers);

const Content = styled.div`
  display: flex;
  max-height: 450px;
`;

const ItemImage = styled.img`
  width: 300px;
  border-radius: 10px;
`;

const SellerImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-top: 5px;
  margin-right: 10px;
`;

const SellerDiv = styled.div`
  display: flex;
  margin-top: 15px;
  padding: 5px;
`;

const StyledButton = styled.button`
  padding: 15px 50px;
  border-radius: 8px;
  border: none;
  background-color: #4600e0;
  color: #fff;
`;

const DescriptionDiv = styled.div`
  margin-left: 30px;
`;

const StyledH1 = styled.h1`
  margin: 0;
  padding: 0;
`;

const StyledH3 = styled.h3`
  margin-top: 0;
  font-style: italic;
  color: #bcbcbc;
`;

const ItemDetails = () => {
  const { itemId } = useParams();

  const item = products.find((element) => element.id === itemId);

  const seller = productSellers.find((element) => element.id === item.sellerId);

  return (
    <div>
      <Header />
      <Content>
        <div>
          <ItemImage src={item.imageSrc} alt={item.name}></ItemImage>
        </div>
        <DescriptionDiv>
          <StyledH1>{item.name}</StyledH1>
          <StyledH3>{item.latinName}</StyledH3>
          <p>{item.description}</p>
          <p>
            <em>
              Product of <b>{item.countryOfOrigin}</b>
            </em>
          </p>
          <StyledButton>
            ${item.price} - {item.quantity > 0 ? "Buy now" : "Out of stock"}
          </StyledButton>

          <SellerDiv>
            <SellerImage src={seller.avatarSrc} alt=""></SellerImage>
            <p>
              Sold by:
              <b> {seller.storeName}</b>
            </p>
          </SellerDiv>
        </DescriptionDiv>
      </Content>
    </div>
  );
};

export default ItemDetails;
