import React from "react";
import styled from "styled-components";

import ListItem from "./ListItem.js";

const ListingGrid = ({ itemList }) => {
  return (
    <Wrapper>
      <FruitGrid>
        {itemList.map((item) => {
          return <ListItem fruit={item} key={item.id} />;
        })}
      </FruitGrid>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const FruitGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 30px;
  row-gap: 30px;
  margin: 0 auto;
`;

export default ListingGrid;
