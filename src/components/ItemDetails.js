import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { items } from "../data";

const ItemDetails = () => {
  const { itemId } = useParams();
  //search for item with itemId
  const item = items[itemId];
  return (
    <div>
      <img src={item.imageSrc} />
      <h1>{item.name}</h1>
      <h2>{item.latinName}</h2>
    </div>
  );
};

export default ItemDetails;
