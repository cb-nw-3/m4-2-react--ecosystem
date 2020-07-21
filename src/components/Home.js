import React from "react";
import styled from "styled-components";
import ListingGrid from "./ListingGrid";
import { sellers, items } from "../data";

const Container = styled.div``;

const Home = () => {
  const listItems = Object.values(items);
  return (
    <Container>
      <p>Fruit emporium sells the finest fruits from this world and beyond.</p>
      <p>
        <strong>Browse items:</strong>
      </p>
      <ListingGrid items={listItems} />
    </Container>
  );
};

export default Home;
