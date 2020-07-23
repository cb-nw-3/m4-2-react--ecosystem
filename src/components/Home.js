import React from 'react';
import styled from 'styled-components';

import Paragraph from './Paragraph';

import { items } from '../data';

function Home(props) {
  return (
    <>
      <Intro>
        <Paragraph>
Home
        </Paragraph>
      </Intro>
    </>
  );
}

const Intro = styled.div`
  padding-bottom: 24px;
`;

export default Home;
