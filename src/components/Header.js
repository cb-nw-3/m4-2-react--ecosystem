import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";


function Header() {
  return (
    <Wrapper>
      <Title>Fruit Emporium</Title>
      <nav>
        <NavigationList>
          <li>
            <NavigationLink to="/">Homepage</NavigationLink>
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
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const Title = styled.h1`
   font-size: 40px;
   font-weight: 900;
`;

const NavigationList = styled.ul`
  list-style-type: none;
  display: flex;
`;

const NavigationLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  padding: 0 16px;
  `;

export default Header;
