import React from "react";

import styled from "styled-components";

import { Link } from "react-router-dom";

const ListingGrid = ({ itemList }) => {
  return (
    <Wrapper>
      {itemList.map((item, index) => {
        return (
          <FoodItem key={item.name + index}>
            <FoodImage src={item.imageSrc} />
            <StyledLink to={"items/" + item.id}>{item.name}</StyledLink>
            <Line></Line>
            <LatinName>{item.latinName}</LatinName>
          </FoodItem>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 30px;
  margin: 0 65px;
`;

const FoodItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 40px 30px;
  width: 250px;
  border-radius: 10px;
  box-shadow: 2px 5px 36px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;
const FoodImage = styled.img`
  width: 120px;
  border-radius: 10px;
  margin-top: -50px;
`;

const Name = styled.h2`
  font-size: 1.3rem;
  margin: 10px;
`;

const StyledLink = styled(Link)`
  font-size: 1.3rem;
  margin: 10px;
  text-decoration: none;
  color: black;
  cursor: pointer;
  font-weight: 800;
`;

const Line = styled.div`
  width: 40px;
  border: 1px solid lightgrey;
  margin: 20px;
  border-radius: 3px;
`;
const LatinName = styled.p`
  font-size: 1rem;
  font-style: italic;
  color: grey;
`;

export default ListingGrid;
