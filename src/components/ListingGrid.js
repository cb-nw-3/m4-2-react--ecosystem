import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const ListingGrid = ({ itemList }) => {
  console.log(itemList);
  return (
    <Wrapper>
      {itemList.map(item => (
        <h1>{item.name}</h1>
      ))}
    </Wrapper>

  );
}

export default ListingGrid;