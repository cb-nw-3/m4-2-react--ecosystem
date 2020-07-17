import React from "react";

import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import ListingGrid from './ListingGrid';
import {items} from '../data'

function About() {
  return <div>
    <p>Fruit emporium sells the finest fruits from this world and beyond.</p>
    <p>Browse items:</p>
    <ListingGrid items={Object.values(items)}></ListingGrid>
  </div>
}
console.log(items)
export default About;