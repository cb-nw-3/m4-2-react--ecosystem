import React from 'react';
import { useParams } from 'react-router-dom';

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

export default SellerDetail;