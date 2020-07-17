import React from "react";

import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { sellers, items } from '../data';

function ItemDetails() {
  console.log('sellers', sellers)
  console.log('items', items)
  const { itemId } = useParams();
  console.log('itemId', itemId)
  const { item } = items.itemId;
  console.log('item', item)
  return <div>
    <StyledImage>

    </StyledImage>
  </div>
}

const StyledImage = styled.img`

`

export default ItemDetails;