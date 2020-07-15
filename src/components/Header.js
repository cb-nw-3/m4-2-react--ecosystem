import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Header = (props) => {
  return (
    <Navigation>
      <h1>Fruit Emporium</h1>
      <ul>
        <Link to="/" style={{ padding: "10px" }}>
          Home
        </Link>
        <Link to="/about" style={{ padding: "10px" }}>
          About
        </Link>
      </ul>
    </Navigation>
  );
};

export default Header;
