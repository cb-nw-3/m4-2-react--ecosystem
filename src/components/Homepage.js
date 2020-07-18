import React from "react";

import styled from 'styled-components';
import ListingGrid from './ListingGrid';
import {items} from '../data'

function About() {
  return <StyledContainer>
    <p>Fruit emporium sells the finest fruits from this world and beyond.</p>
    <p>Browse items:</p>
    <ListingGrid items={Object.values(items)}></ListingGrid>
  </StyledContainer>
}

const StyledContainer = styled.div`
  min-width: 500px;
  margin: 0 30px;
`

export default About;