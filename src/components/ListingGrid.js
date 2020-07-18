import React from 'react';

import ListingItem from './ListingItem';
import ListingSeller from './ListingSeller';
import styled from 'styled-components';

function ListingGrid(props) {
  console.log('ListingGrid', props)
  //console.log(props.props.items)
  if (props.props) {
    return <StyledGrid>
      {props.props.items.map(item => {
        if (props.props.seller === item.sellerId) {
          return <ListingItem item={item} key={item.id}></ListingItem>
        }
        // to remove yellow warning in console that map expect a return value
        return <></>
      })}
    </StyledGrid>
  } else if (props.items) {
    return <StyledGrid>
      {props.items.map(item => {
        return <ListingItem item={item} key={item.id}></ListingItem>
      })}
    </StyledGrid>
  } else if (props.sellers) {
    return <StyledGrid>
      {props.sellers.map(seller => {
        return <ListingSeller seller={seller} key={seller.id}></ListingSeller>
      })}
    </StyledGrid>
  }
}

const StyledGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  justify-items: center;
  grid-gap: 50px;
  margin: 30px;
`

export default ListingGrid