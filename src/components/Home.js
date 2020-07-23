import React from 'react';
import styled from 'styled-components';
import Paragraph from './Paragraph';
import ListingGrid from './ListingGrid';

import { items } from '../data';

function Home(props) {
  return (
    <>
      <Intro>
        <Paragraph>
          Fruit emporium sells the finest fruits from this world and beyond.
        </Paragraph>
        <Paragraph>
          <strong>Browse items:</strong>
        </Paragraph>
      </Intro>
      <ListingGrid itemList={Object.values(items)} />
    </>
  );
}

const Intro = styled.div`
  padding-bottom: 24px;
`;

export default Home;
