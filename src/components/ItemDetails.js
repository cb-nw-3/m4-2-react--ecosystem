import React from 'react';
import styled from 'styled-components';
import { items } from '../data';
import { sellers } from '../data';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
  const { itemId } = useParams();
  console.log(items[itemId]);
  return (
    <Section>
      <Image src={items[itemId].imageSrc}></Image>
      <TextWrapper>
        <div>
          <H2>{items[itemId].name}</H2>
          <H3>{items[itemId].latinName}</H3>
        </div>
        <Description>{items[itemId].description}</Description>
        <Country>{items[itemId].countryOfOrigin}</Country>
        <PriceWrapper>
          <Price>{items[itemId].price}</Price>
        </PriceWrapper>
        <SellerWrapper>
          <SellerImage
            src={sellers[items[itemId].sellerId].avatarSrc}></SellerImage>
          <SellerInfo>{sellers[items[itemId].sellerId].storeName}</SellerInfo>
        </SellerWrapper>
      </TextWrapper>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 20px;
  padding-left: 28px;
`;

const Image = styled.img`
  margin-top: 20px;
  width: 35%;
  border-radius: 6px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1;
  height:100%
  flex-wrap: wrap;
  margin-left: 30px;
  padding-top: 20px;
  `;

const H2 = styled.h2`
  font-size: calc(0.8rem + 3vw);
`;

const H3 = styled.h3`
  font-size: calc(0.5rem + 1.5vw);
  color: silver;
  font-style: italic;
  font-weight: 100;
`;

const Description = styled.p`
  margin-top: 25px;
  font-size: calc(0.8rem + 0.8vw);
`;

const Country = styled.p`
margin-top: 0.1vw;
font-size: calc(0.8rem + 0.1vw);
&:before {
    content: 'Product of';
    margin-right: 6px
    font-style: italic;
    color:#696969;
}
`;

const PriceWrapper = styled.div`
display: flex;
justify-content: center;
align-content: cneter;
width: 50%;
flex-wrap: wrap;
background-color: #4600E0;
padding calc(0.2rem +  0.2vw) 0;
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

const SellerWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: cneter;
  width: 100%;
  flex-wrap: wrap;
  padding 5px;
  margin-top:15px;
`;

const SellerImage = styled.img`
  border-radius: 50%;
  height: 50px;
`;

const SellerInfo = styled.p`
  font-weight: 800;
  &:before {
    content: 'Sold by: ';
    margin-right: 6px
    font-style: italic;
    font-weight: 400;
  }

`;
export default ItemDetails;
