import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { items, sellers } from "../data";

const ItemDetails = () => {
  // your URL=> /item/:itemId => /item/a
  const { itemId } = useParams();
  //search for item with itemId
  const item = items[itemId]; // => items['a'] => items.a
  // bracket notation as I do not know WHICH item am accessing until url changes

  return (
    <Page>
      <ImageProduct src={item.imageSrc} />
      <Copy>{item.name}</Copy>
      <Copy>{item.latinName}</Copy>
      <Copy>{item.countryOfOrigin}</Copy>
      <Copy>{item.description}</Copy>
      <ImageVendor src={sellers[item.sellerId].avatarSrc} />
      {item.quantity > 0 ? (
        <InStockButton>BUY NOW</InStockButton>
      ) : (
        <OutOfStockButton disabled>OUT OF STOCK</OutOfStockButton>
      )}

      {/* sellers['alice'].avatarSrc => sellers.alice.avatarSrc */}
      {/* alice is like a variable we access with bracket notation */}
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Copy = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
`;

const InStockButton = styled.button`
  background-color: green;
  width: 150px;
  height: 50px;
  border-radius: 15px;
  font-family: "Roboto", sans-serif;
`;

const OutOfStockButton = styled.button`
  background-color: red;
  width: 150px;
  height: 50px;
  border-radius: 15px;
  font-family: "Roboto", sans-serif;
`;

const ImageProduct = styled.img`
  width: 500px;
  border-radius: 30px;
`;

const ImageVendor = styled.img`
  width: 100px;
  border-radius: 30px;
`;

export default ItemDetails;
