import React from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';
import ListingGrid from './ListingGrid';
import { items } from '../data';

function SellerDetail() {
  // the name between bracket must be the same as in the url afer the semi colon
  const { sellerId } = useParams();

  let props = {
    seller: sellerId,
    items: Object.values(items)
  }

  return <ListingGrid props={props}></ListingGrid>
}

const StyledContainer = styled.div`
  min-width: 500px;
  margin: 0 30px;
`

export default SellerDetail;