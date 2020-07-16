import React from 'react';
import styled from 'styled-components';
import { items } from '../data';
import { Link } from 'react-router-dom';

const ListingGrid = ({ itemList }) => {
  return (
    <Section>
      {Object.keys(itemList).map((key, index) => {
        return (
          <Link key={'Wrapper' + index} to={'/items/' + key}>
            <WrapperImage>
              <Img src={itemList[key].imageSrc}></Img>
              <TitleWrapper>
                <H2>{itemList[key].name}</H2>
              </TitleWrapper>
              <H3>{itemList[key].latinName}</H3>
            </WrapperImage>
          </Link>
        );
      })}
    </Section>
  );
};

function Homepage() {
  return (
    <Wrapper>
      <Title>
        Fruit emporium sells the finest fruits from this world and beyond.
      </Title>
      <p>Browse items:</p>
      <ListingGrid itemList={items}></ListingGrid>
    </Wrapper>
  );
}

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

const WrapperImage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 240px;
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
export default Homepage;
