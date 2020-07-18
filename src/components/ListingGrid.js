import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(3, 1fr);
`;

const LatinName = styled.h3`
  font-size: 15px;
  margin-top: -15px;
`;

//This component will take an array of store items, as props, and render the grid showing all the items the user can buy.
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
          <h3><LatinName>{item.latinName}</LatinName></h3>
        </div>
      ))}
    </Wrapper>
  );
};

export default ListingGrid;