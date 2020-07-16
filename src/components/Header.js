import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #6b45e7;
`;

const Header = (props) => {
  return (
    <Navigation>
      <StyledH1>Fruit Emporium</StyledH1>
      <StyledUl>
        <StyledLink to="/" style={{ padding: "10px" }}>
          Home
        </StyledLink>
        <StyledLink to="/about" style={{ padding: "10px" }}>
          About
        </StyledLink>
      </StyledUl>
    </Navigation>
  );
};

export default Header;
