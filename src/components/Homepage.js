import React from 'react';
import styled from 'styled-components';
import { items } from '../data';

const ListingGrid = ({ itemList }) => {
  return (
    <Section>
      {Object.keys(itemList).map((key) => {
        return (
          <WrapperImage>
            <Img src={itemList[key].imageSrc}></Img>
          </WrapperImage>
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 25px;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  font-size: 1.2rem;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const WrapperImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 200px;
  height: 240px;
  background: white;
  border-radius: 8px;
  border: 1px solid #ececec;
`;

const Img = styled.img`
  position: absolute;
  top: -10px
  width: 150px;
  border-radius: 6px;
`;

export default Homepage;
