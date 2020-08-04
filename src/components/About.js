import React from "react";

import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <p>
        Fruit emporium is founded on a very simple principle:
        <strong> Fruit is good.</strong>
      </p>
      <p>
        We carry the finest selection of produce from around the world, from
        tart citrus to sweet cherries. Our sellers are world-class, and your
        fruit is guaranteed to be worthy of auction in Asian markets.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 75px;
`;

export default About;
