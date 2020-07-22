import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <Wrapper>
      <Title>Fruit Emporium</Title>
      <nav>
        <NavigationList>
          <li>
            <NavigationLink to="/">Homepage</NavigationLink>{" "}
          </li>
          <li>
            <NavigationLink to="/about">About</NavigationLink>
          </li>
        </NavigationList>
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  /* Other styles here */
`;

const Title = styled.h1`
  font-size: 32px;
  /* Other styles here */
`;

const NavigationList = styled.ul`
  list-style-type: none;
  display: flex;
`;

const NavigationLink = styled(NavLink)`
  font-size: 16px;
  color: red;
`;

export default Header;
