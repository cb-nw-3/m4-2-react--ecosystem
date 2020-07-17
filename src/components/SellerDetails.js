import React from 'react';
import styled from 'styled-components';
import { items } from '../data';
import { sellers } from '../data';
import { useParams } from 'react-router-dom';
import ListingGrid from './ListingGrid';

const SellerDetails = () => {
  const { sellerId } = useParams();
  const allowed = Object.keys(items).filter(
    (key) => items[key].sellerId === sellerId
  );
  const filtered = Object.keys(items)
    .filter((key) => allowed.includes(key))
    .reduce((obj, key) => {
      obj[key] = items[key];
      return obj;
    }, {});
  return (
    <Section>
      <div>
        <Image src={sellers[sellerId].avatarSrc}></Image>
        <TextWrapper>
          <div>
            <H2>{sellers[sellerId].storeName}</H2>
            <Description>{sellers[sellerId].description}</Description>
          </div>
        </TextWrapper>
      </div>
      <ListingGrid itemList={filtered}></ListingGrid>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  justify-content: er;
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

const Description = styled.p`
  margin-top: 25px;
  font-size: calc(0.8rem + 0.8vw);
`;

export default SellerDetails;
