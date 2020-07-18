import React from "react";
import styled from "styled-components";
import { items } from "../data.js";
import { Link } from "react-router-dom";

function ListingComponent({ item }) {
  console.log("ListingComponent");
  console.log(item);
  let link_url = "/items/" + item.id;

  return (
    <ListingComponentWrapper>
      <FruitImage image_source={item.imageSrc}></FruitImage>

      <FruitLink to={link_url}>{item.name}</FruitLink>
      <FruitLatinName>{item.latinName}</FruitLatinName>
    </ListingComponentWrapper>
  );
}

export default ListingComponent;

const FruitLink = styled(Link)`
  text-decoration: none;
  padding-top: 10px;
  text-align: center;
  z-index: 2;
  background-color: white;
`;

const ListingComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 25px;
  margin-top: 25px;

  box-shadow: 3px 3px 5px 3px #ccc;
  border-radius: 5px;
  overflow: hidden;
`;

const FruitImage = styled.div`
  background-image: url("${(props) => props.image_source}");
  height: 250px;
  width: 250px;
  background-position: center;
  background-size: cover;
  transition: all 0.4s ease-in-out;

  z-index: 1;



  &:hover {
    transform: scale(1.4);
  }
`;

const FruitLatinName = styled.div`
  font-family: "Dancing Script", cursive;
  text-align: center;
  background-color: white;

  z-index: 2;
`;
