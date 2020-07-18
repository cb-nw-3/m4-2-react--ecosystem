import React from "react";
import styled from "styled-components";

function ListingComponent({ item }) {
  console.log("ListingComponent");
  console.log(item);

  return (
    <ListingComponentWrapper>
      <FruitImage src={item.imageSrc}></FruitImage>
      <FruitName>{item.name}</FruitName>
      <FruitLatinName>{item.latinName}</FruitLatinName>
    </ListingComponentWrapper>
  );
}

export default ListingComponent;

const ListingComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 25px;
  margin-top: 25px;

  box-shadow: 3px 3px 5px 3px #ccc;
  border-radius: 5px;
`;

const FruitImage = styled.img`
  height: 250px;
  width: 250px;
`;

const FruitName = styled.div`
  padding-top: 10px;
  text-align: center;
`;

const FruitLatinName = styled.div`
  font-family: "Dancing Script", cursive;
  text-align: center;
`;
