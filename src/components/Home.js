import React from "react";
import styled from "styled-components";
import { items } from "../data.js";
import ListingGrid from "./ListingGrid.js";

const Home = () => {
  return (
    <div>
      <Paragraph>
        Fruit emporium sells the finest fruits from this world and beyond.
      </Paragraph>
      <Paragraph>Browse items:</Paragraph>
      <ListingGrid itemList={Object.values(items)} />
    </div>
  );
};

const Paragraph = styled.p`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

export default Home;
