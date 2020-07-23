import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
  const { itemId } = useParams();
  //search for item with itemId
  const item = "thatItem";
  return (
    <div>
      <img src={item.image} />
      <h1>{item.name}</h1>
      <h2>{item.lname}</h2>
    </div>
  );
};

export default ItemDetails;
