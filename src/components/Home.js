import React from "react";
import { Link } from "react-router-dom";
import ListingGrid from "./ListingGrid";
import { items } from "../data.js";

function Home() {
  console.log("About");

  return (
    <div>
      <p>Fruit emporium sells the finest fruits from this world and beyond.</p>
      <p>Browse items:</p>
      <ListingGrid items={items}></ListingGrid>
    </div>
  );
}

export default Home;
