import React from "react";
import { items } from "../data";
import ListingGrid from "./ListingGrid";

const Homepage = () => {
  return (
    <>
      <p>
        Fruit emporium sells the finest fruits from this world and beyond.
        Browse items:
      </p>
      <ListingGrid itemList={Object.values(items)} />
    </>
  );
};

export default Homepage;
