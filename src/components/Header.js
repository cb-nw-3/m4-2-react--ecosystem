import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const StyledH1 = styled.h1`
  font-weight: bold;
`;

const StyledUl = styled.ul`
  text-align: center;
  line-height: 50px;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #6b45e7;
  padding: 10px;
`;

const Header = (props) => {
  return (
    <Navigation>
      <StyledH1>Fruit Emporium</StyledH1>
      <StyledUl>
        <StyledLink
          exact
          to="/"
          activeStyle={{
            fontWeight: "bold",
            color: "#FF448B",
            textDecoration: "underline",
          }}
        >
          Home
        </StyledLink>
        <StyledLink
          exact
          to="/about"
          activeStyle={{
            fontWeight: "bold",
            color: "#FF448B",
            textDecoration: "underline",
          }}
        >
          About
        </StyledLink>
      </StyledUl>
    </Navigation>
  );
};

export default Header;
