import React from "react";
import { Link } from "react-router-dom";

function Home() {
  console.log("About");

  return (
    <div>
      <Link to="/items">Items</Link>
    </div>
  );
}

export default Home;
