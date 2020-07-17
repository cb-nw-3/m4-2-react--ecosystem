import React from "react";
import { Link } from "react-router-dom";

function Home() {
  console.log("About");

  return (
    <div>
      <p>Fruit emporium sells the finest fruits from this world and beyond.</p>
      <p>Browse items:</p>
      <Link to="/items">Items</Link>
    </div>
  );
}

export default Home;
