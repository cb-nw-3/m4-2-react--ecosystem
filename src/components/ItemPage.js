import React from "react";
import { sellers, items } from "../data";
import { useParams } from "react-router-dom";

import styled from "styled-components";

const ItemPage = () => {
  const { itemId } = useParams();
  const currentItem = items[itemId];
  const currentSeller = sellers[currentItem.sellerId];
  const isInStock = currentItem.quantity > 0;

  return (
    <div>
      <h4>{currentItem.name}</h4>
      <h4>{currentItem.latinName}</h4>
      <h4>{currentItem.description}</h4>
      <h4>{currentItem.countryOfOrigin}</h4>
      <FruitImg src={currentItem.imageSrc} />

      {/* if condition in react */}
      {isInStock ? (
        <button>${currentItem.price} - Buy now</button>
      ) : (
        <OutOfStock>Out of Stock</OutOfStock>
      )}

      <h4>{currentSeller.storeName}</h4>
      <AvatarImg src={currentSeller.avatarSrc} />
    </div>
  );
};

const FruitImg = styled.img`
  border-radius: 12px;
  width: 20%;
  height: 20%;
`;

const AvatarImg = styled.img`
  border-radius: 30px;
  width: 3%;
  height: 3%;
`;

const OutOfStock = styled.p`
  color: red;
`;

export default ItemPage;
