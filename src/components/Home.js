import React from "react";
import styled from "styled-components";
import ListingGrid from "./ListingGrid";
import Paragraph from "./Paragraph";

function Home(props) {
  return (
    <>
      <Paragraph>
        Fruit emporium sells the finest fruits from this world and beyond.
      </Paragraph>
      <Paragraph>
        <strong>Browse items:</strong>
        <ListingGrid />
      </Paragraph>
    </>
  );
}

export default Home;
