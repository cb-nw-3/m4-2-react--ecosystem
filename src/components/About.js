import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  padding: 0 5%;
`;

const Text = styled.p`
  font-size: 22px;
  padding:3% 0;
`;


const About = () => {
  return (
    <Wrapper>
      <Text>Fruit emporium is founded on a very simple principle: <strong>Fruit is good.</strong> </Text>
      <Text>We carry the finest selection of produce from around the world, from tart citrus to sweet cherries. Our sellers are world-class, and your fruit is guaranteed to be worthy of auction in Asian markets.</Text>
    </Wrapper>
  );
}

export default About;