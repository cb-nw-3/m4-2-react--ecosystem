import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
`;

const ListingGrid = ({ itemList }) => {
  const items = Object.values(itemList);

  return (
    <Wrapper>
      {items.map((item, index) => (
        <div key={item.name + index}>
          <img
            src={item.imageSrc}
            alt={item.name}
            style={{ width: "200px" }}
          ></img>
          <h3>{item.name}</h3>
          <p>{item.latinName}</p>
        </div>
      ))}
    </Wrapper>
  );
};

export default ListingGrid;
