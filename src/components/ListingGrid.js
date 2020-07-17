import React from 'react';

import ListingItem from './ListingItem';
import styled from 'styled-components'

function ListingGrid(props) {
  console.log('ListingGrid', props)
  return <StyledGrid>
    {props.items.map(item => {
      return <ListingItem item={item} key={item.id}></ListingItem>
    })}
  </StyledGrid>
}

const StyledGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  grid-row-gap: 50px;
  margin: 30px;
`

export default ListingGrid