import React from 'react';

import styled from 'styled-components';
import ListingGrid from './ListingGrid';
import { sellers } from '../data';

function Sellers() {
  return <StyledContainer>
    <ListingGrid sellers={Object.values(sellers)}></ListingGrid>
  </StyledContainer>
}

const StyledContainer = styled.div`
  min-width: 500px;
  margin: 0 30px;
`

export default Sellers;