import React from "react";
import ListingGrid from "./ListingGrid";
import { items } from "../data";

function homepage() {
  return (
    <div>
      <p>Fruit emporium sells the finest fruits from this world and beyond.</p>
      <p>
        <strong>Browse items:</strong>
      </p>
      <ListingGrid items={Object.values(items)}></ListingGrid>
    </div>
  );
}
export default homepage;
