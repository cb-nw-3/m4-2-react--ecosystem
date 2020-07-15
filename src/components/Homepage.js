import React from 'react';
//import styled from 'styled-components';
import { items } from '../data';
import ListingGrid from './ListingGrid';

// console.log(Object.values(items));

const Homepage = () => {
  return (
    <>
    <p>Fruit emporium sells the finest fruits from this world and beyond.</p>
    <ListingGrid itemList={Object.values(items)} />
    </>
    );

}

export default Homepage;