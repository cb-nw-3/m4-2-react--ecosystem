import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
          <Link to={`/items/${item.id}`}>
            <img
              src={item.imageSrc}
              alt={item.name}
              style={{ width: "200px" }}
            ></img>
          </Link>
          <h3>{item.name}</h3>
          <p>{item.latinName}</p>
        </div>
      ))}
    </Wrapper>
  );
};

export default ListingGrid;
