import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { items, sellers } from "../data";

const Container = styled.div`
  display: flex;
`;

const Col = styled.div`
  margin: 10px;
`;

const Image = styled.img`
  border-radius: 4px;
  max-width: 300px;
`;

const Span = styled.span`
  color: #8c8c8c;
  font-style: italic;
  display: block;
`;

const Button = styled.button`
  border-radius: 4px;
  padding: 15px;
  color: #fff;
  background-color: #3f0fd1;
  margin-top: 20px;
  margin-bottom: 20px;
  min-width: 150px;
  border: none;
  display: block;
`;

const SellerImg = styled.img`
  border-radius: 25px;
  width: 30px;
`;

const ItemDetails = () => {
  const { id } = useParams();
  const item = items[id];
  return (
    <Container>
      <Col>
        <Image src={item.imageSrc} />
      </Col>
      <Col>
        <h2>{item.name}</h2>
        <Span>{item.latinName}</Span>
        <p>{item.description}</p>
        <Span>
          Product of <strong>{item.countryOfOrigin}</strong>
        </Span>
        <Button>${item.price} - Buy now</Button>
        <SellerImg src={sellers[item.sellerId].avatarSrc} />
        <span>
          Sold by: <strong>{sellers[item.sellerId].storeName}</strong>
        </span>
      </Col>
    </Container>
  );
};

export default ItemDetails;
