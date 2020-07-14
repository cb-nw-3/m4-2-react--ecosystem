import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function ListingGrid({ items }) {
  return (
    <Grid>
      {items.map((item) => {
        return (
          <StyledLink to={`/items/${item.id}`}>
            <ItemCard>
              <ItemImage src={item.imageSrc}></ItemImage>
              <ItemTitle>{item.name}</ItemTitle>
              <ItemSubtitle>{item.latinName}</ItemSubtitle>
            </ItemCard>
          </StyledLink>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 30px;
  margin-top: 40px;
`;
const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 30px 0px #e9e9e9;
  padding: 20px 40px;
  border-radius: 30px;
`;
const ItemImage = styled.img`
  object-fit: cover;
  height: 200px;
  width: 200px;
  border-radius: 10px;
`;
const ItemTitle = styled.h1`
  &::after {
    content: "";
    display: block;
    position: relative;
    top: 30%;
    width: 100%;
    height: 2px;
    background: blueviolet;
  }
`;
const ItemSubtitle = styled.h2`
  font-size: 0.9em;
  color: grey;
  font-style: italic;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default ListingGrid;
