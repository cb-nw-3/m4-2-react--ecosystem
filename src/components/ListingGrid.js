import React from "react";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ListingGrid = ({ itemList }) => {
  return itemList.map((item) => {
    return (
      <Grid>
        <ListItem
          image={item.imageSrc}
          name={item.name}
          lname={item.latinName}
        />
        <MyLink to={"/items/" + item.id}>{item.name} Page</MyLink>
      </Grid>
    );
  });
};

const Grid = styled.div`
  display: inline-block;
  width: 33%;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
`;

const MyLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: black;
`;

export default ListingGrid;
