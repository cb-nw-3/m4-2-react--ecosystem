import React from "react";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ListingGrid = (props) => {
  return props.itemList.map((item) => {
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
// above we used that prop that is the array to map over it and create a component foreach element

const Grid = styled.div`
  display: inline-flex;
  width: 30%;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 20px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 5px 8px grey;
`;

const MyLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: black;
`;

export default ListingGrid;
