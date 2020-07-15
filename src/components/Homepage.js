import React from "react";
import Header from "./Header";
import ListingGrid from "./ListingGrid";
import { items } from "../data";

const Homepage = (props) => {
  return (
    <div>
      <Header />
      <h3>Home</h3>
      <p>Fruit emporium sells the finest fruits from this world and beyond.</p>
      <p>Browse items:</p>
      <ListingGrid itemList={items} />
    </div>
  );
};

export default Homepage;
