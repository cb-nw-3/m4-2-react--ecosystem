import React from 'react';
import styled from 'styled-components';

import ListingItem from './ListingItem';

const ListingGrid = ({ itemList }) => {
  return (
    <Wrapper>
      {itemList.map((item) => (
        <ListingItem key={item.id} item={item} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  margin: 30px;
`;

export default ListingGrid;
