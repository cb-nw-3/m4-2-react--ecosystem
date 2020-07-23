import React from "react";
import styled from "styled-components";
import ListingGrid from "./ListingGrid";
import { items } from "../data.js";

//it takes just the values and passes them as an array
const itemsArray = Object.values(items);

function Home(props) {
  return (
    <Wrapper>
      <p>
        Fruit emporium sells the finest fruits from this world and beyond.
        Browse items:
      </p>
      <ListingGrid itemList={itemsArray} />
    </Wrapper>
  );
}

const Wrapper = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: lighter;
  font-size: 30px;
`;

export default Home;
