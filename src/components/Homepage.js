import React from "react";
import styled from "styled-components";

import { items } from "../data";
import ListingGrid from "./ListingGrid";

const fruitObjects = Object.values(items);

const Homepage = () => {
  return (
    <Wrapper>
      <p>
        Fruit emporium sells the finest fruits from this world and beyond.
        Browse items:
      </p>
      <ListingGrid itemList={fruitObjects} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 75px;
`;

export default Homepage;
