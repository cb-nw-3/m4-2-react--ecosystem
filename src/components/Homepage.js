import React from 'react';
//import styled from 'styled-components';
import { items } from '../data';
import ListingGrid from './ListingGrid';
import styled from 'styled-components';
// console.log(Object.values(items));

const Wrapper = styled.div`
  padding: 0 5%;
`;

const Text = styled.p`
  font-size: 22px;
  padding:3% 0;
`;



const Homepage = () => {
  return (
    <Wrapper>
    <Text>Fruit emporium sells the finest fruits from this world and beyond.</Text>
    <Text><strong>Browse Items:</strong></Text>
    <ListingGrid itemList={Object.values(items)} />
    </Wrapper>
    );

}

export default Homepage;