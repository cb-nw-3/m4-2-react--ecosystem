import React from 'react';
import styled from 'styled-components';

import ListingItem from './ListingItem';

const Grid = styled.div`
  display: grid;
  margin: auto;
  grid-template-columns: repeat(3,auto);
  grid-template-rows: repeat(3,auto);
  row-gap: 30px;
  column-gap: 30px;
`;

const ListingGrid = ({ itemList }) => {
  //console.log(itemList);
  return (
    <Grid>
      {itemList.map(item => (
        <ListingItem item={item} key={item.id} />
      ))}
    </Grid>

  );
}

export default ListingGrid;