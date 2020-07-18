import React from "react";

import styled from 'styled-components';

function About() {
  return <StyledContainer>
    <p>Fruit emporium is founded on a very simple principle: Fruit is good.</p>
    <p>  We carry the finest selection of produce from around the world, from tart citrus to sweet cherries. Our sellers are world-class, and your fruit is guaranteed to be worthy of auction in Asian markets.</p>
  </StyledContainer>
}

const StyledContainer = styled.div`
  width: 750px;
  margin: 0 auto;
`

export default About;