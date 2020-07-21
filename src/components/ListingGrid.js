import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ListingItem from './ListingItem';

// Loop through each element to render the UI.

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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 32px;
  margin: 32px 0;
`;

export default ListingGrid;
