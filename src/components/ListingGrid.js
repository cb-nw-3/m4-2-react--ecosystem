import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListingGrid = ({ itemList }) => {
  return (
    <Wrapper>
      {itemList.map((item) => (
        //link to the id of the item
        <CardLink to={`/items/${item.id}`}>
          <FruitImg src={item.imageSrc} />
          <h4>{item.name}</h4>
          <h5>{item.latinName}</h5>
        </CardLink>
      ))}
    </Wrapper>
  );
};

const CardLink = styled(Link)`
  text-decoration: none;
  transition: transform 250ms;

  &:hover {
    transform: scale(1.05);
    transform-origin: center center;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 32px;
  margin: 32px 0;
`;

const FruitImg = styled.img`
  border-radius: 12px;
  width: 80%;
`;

export default ListingGrid;
