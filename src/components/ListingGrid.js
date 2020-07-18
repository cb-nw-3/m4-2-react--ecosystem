import React from "react";
import ListingComponent from "./ListingComponent";
import styled from "styled-components";

function ListingGrid({ items }) {
  console.log("ListingGrid");
  console.log(items);

  return (
    <ListingGridWrapper>
      {Object.values(items).map((element) => {
        return <ListingComponent item={element} />;
      })}
    </ListingGridWrapper>
  );
}

export default ListingGrid;

const ListingGridWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
