import React from 'react';
import styled from 'styled-components';
import { items } from '../data';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
  const { itemId } = useParams();
  console.log(items[itemId]);
  return (
    <Section>
      <Image src={items[itemId].imageSrc}></Image>
      <TextWrapper>
        <H2>{items[itemId].name}</H2>
        <H3>{items[itemId].latinName}</H3>
        <Description>{items[itemId].description}</Description>
        <Country>{items[itemId].countryOfOrigin}</Country>
        <PriceWrapper>
          <Price>{items[itemId].price}</Price>
        </PriceWrapper>
      </TextWrapper>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 20px;
`;

const Image = styled.img`
  margin-top: 20px;
  justify-content: flex-start;
  width: 35%;
  border-radius: 6px;
`;

const TextWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
width: 35%;
height:100%
flex-wrap: wrap;
margin-left: 30px;
padding-top: 20px;
`;

const H2 = styled.h2`
  font-size: 1.8rem;
`;

const Description = styled.p`
  margin-top: 25px;
  font-size: 0.8rem;
`;

const Country = styled.p`
  margin-top: 25px;
  font-size: 0.8rem;
  &:before {
    content: 'Product of';
    margin-right: 6px
    font-style: italic;
    color:#696969;
  }
`;

const H3 = styled.h3`
  font-size: 0.85rem;
  color: silver;
  font-style: italic;
  font-weight: 100;
`;

const PriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: cneter;
  width: 50%;
  flex-wrap: wrap;
  background-color: #4600E0;
  padding 5px 0;
  border-radius: 6px;
`;

const Price = styled.p`
  font-size: 0.8rem;
  color: white;
  &:before {
    content: '$';
    margin-right: 6px
    font-style: italic;
  }
  &:after{
      content: "- Buy Now"
  }
`;

export default ItemDetails;
