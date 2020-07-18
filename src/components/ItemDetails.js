import React from "react";
import { useParams } from "react-router-dom";
import { items } from "../data.js";
import { sellers } from "../data.js";

import ListingComponent from "./ListingComponent";
import styled from "styled-components";
import { Link } from "react-router-dom";

function ItemDetails() {
  console.log("ItemDetails");
  const itemId = useParams().itemId;
  console.log(itemId);
  let selected_item = Object.values(items).find((e) => e.id === itemId);
  console.log(selected_item);

  let seller = Object.values(sellers).find(
    (e) => e.id === selected_item.sellerId
  );

  console.log(seller);

  return (
    <div>
      <ItemDetailsWrapper>
        <ItemDetailsImage
          image_source={selected_item.imageSrc}
        ></ItemDetailsImage>
        <ItemDetailsDetails>
          <Name>{selected_item.name}</Name>

          <LatinName>{selected_item.latinName}</LatinName>
          <Description>{selected_item.description}</Description>
          <CountryOfOrigin>
            Product of: {selected_item.countryOfOrigin}
          </CountryOfOrigin>
          <Button>${selected_item.price} - Buy Now</Button>
          <Seller>
            <SellerImg src={seller.avatarSrc} />
            <SellerDetails>Sold by: {seller.storeName}</SellerDetails>
          </Seller>
        </ItemDetailsDetails>
      </ItemDetailsWrapper>
    </div>
  );
}

export default ItemDetails;

const Button = styled.button`
  /* Adapt the colors based on primary prop */

  font-size: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 8px;
  background-color: blue;
  width: 150px;
`;
const Seller = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 250px;
`;

const SellerImg = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 25px;
  margin-right: 10px;
`;

const SellerDetails = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 14px;
`;

const ItemDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 25px;
  margin-top: 25px;

  overflow: hidden;
`;
const ItemDetailsDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  background-color: white;
  z-index: 2;
`;

const ItemDetailsImage = styled.div`
  background-image: url("${(props) => props.image_source}");
  height: 250px;
  width: 250px;
  background-position: center;
  background-size: cover;
  border-radius: 50px;
  border: none;
    transition: all 0.4s ease-in-out;
  z-index: 1;



  &:hover {
    transform: scale(1.4);
  }
`;

const Name = styled.div`
  padding-top: 5px;
  z-index: 2;
  background-color: white;
  font-weight: 700;
  font-size: 19px;
`;

const Description = styled.div`
  padding-top: 10px;
  z-index: 2;
  background-color: white;
  width: 250px;
  font-size: 12px;
`;

const CountryOfOrigin = styled.div`
  padding-top: 10px;
  z-index: 2;
  background-color: white;
  font-size: 12px;
`;

const LatinName = styled.div`
  font-family: "Dancing Script", cursive;
  background-color: white;
  color: grey;
  z-index: 2;
`;
