import React from "react";
import styled from "styled-components";
import { items } from "../data";
import ListItem from "./ListItem";

function ListingGrid(props) {
  // from object create an array of items
  const itemsArray = Object.values(items);
  return (
    <Wrapper>
      {itemsArray.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 32px;
  margin: 32px 0;
`;

export default ListingGrid;
