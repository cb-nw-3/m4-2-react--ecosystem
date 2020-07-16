import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <Wrapper>
      <Title>
        Fruit emporium sells the finest fruits from this world and beyond.
      </Title>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  @import url('https://fonts.googleapis.com/css2?family=Sora&display=swap');
  font-family: 'Sora', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
`;

const Title = styled.h2`
  font-size: 1.2rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 130px;
`;

export default Homepage;
