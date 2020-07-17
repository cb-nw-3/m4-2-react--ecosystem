import React from 'react';
import styled from 'styled-components';
import { sellers } from '../data';
import { Link } from 'react-router-dom';

const ListingGrid = ({ sellerList }) => {
  return (
    <Section>
      {Object.keys(sellerList).map((key, index) => {
        return (
          <Link key={'Wrapper' + index} to={'/sellers/' + key}>
            <WrapperSeller>
              <Img src={sellerList[key].avatarSrc}></Img>
              <TitleWrapper>
                <H2>{sellerList[key].storeName}</H2>
              </TitleWrapper>
              <H3>{sellerList[key].description}</H3>
            </WrapperSeller>
          </Link>
        );
      })}
    </Section>
  );
};

function Sellers() {
  return (
    <Wrapper>
      <Title>Sellers.</Title>
      <p>Browse sellers:</p>
      <ListingGrid sellerList={sellers}></ListingGrid>
    </Wrapper>
  );
}

export default Sellers;

const Wrapper = styled.header`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 25px;
  background-color: #f9f9f9;
  width: 100%;
  justify-self: stretch;
`;

const Title = styled.h2`
  font-size: 1.2rem;
`;

const Section = styled.section`
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
`;

const WrapperSeller = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 280px;
  height: 240px;
  background: white;
  border-radius: 8px;
  border: 1px solid #ececec;
  margin: 20px 15px;
`;

const Img = styled.img`
  position: relative;
  top: -25px;
  width: 150px;
  border-radius: 6px;
`;

const H2 = styled.h2`
  font-size: 1.1rem;
`;

const TitleWrapper = styled.div`
  margin: 0;
  padding: 9px;
  box-shadow: 0 18px 8px -16px gray;
`;

const H3 = styled.h3`
  margin-top: 10px;
  font-size: 0.85rem;
  color: gray;
  font-style: italic;
  font-weight: 200;
`;
