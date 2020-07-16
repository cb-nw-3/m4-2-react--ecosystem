import React from "react";

import styled from "styled-components";

const Home = () => {
  return (
    <div>
      <Paragraph>
        Fruit emporium sells the finest fruits from this world and beyond.
      </Paragraph>
      <Paragraph>
        <strong>Browse items:</strong>
      </Paragraph>
    </div>
  );
};

const Paragraph = styled.p`
  margin: 35px 65px;
`;

export default Home;
