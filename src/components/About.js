import React from 'react';
import styled from 'styled-components';

function About() {
  return (
    <Wrapper>
      <Title>
        Fruit emporium is founded on a very simple principle: Fruit is good.
      </Title>
      <p>
        We carry the finest selection of produce from around the world, from
        tart citrus to sweet cherries. Our sellers are world-class, and your
        fruit is guaranteed to be worthy of auction in Asian markets.
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  @import url('https://fonts.googleapis.com/css2?family=Sora&display=swap');
  font-family: 'Sora', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 25px;
`;

const Title = styled.h2`
  font-size: 1.2rem;
`;

export default About;
