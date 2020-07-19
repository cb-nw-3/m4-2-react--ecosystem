import React from "react";
import styled from "styled-components";
import { items } from "../data.js";
import ListingGrid from "./ListingGrid";

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
  padding-left: 30px;
`;

export default Home;
