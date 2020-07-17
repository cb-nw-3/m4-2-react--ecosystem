import React from 'react';
import styled from 'styled-components';
import { items } from '../data';
import ListingGrid from './ListingGrid';

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

export default Homepage;
