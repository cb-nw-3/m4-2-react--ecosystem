import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

//components are functions that return something. Eg a function that contains
// a wrapper - a title and a nav
const Header = () => {
  return (
    <Wrapper>
      <Title>Fruit Emporium</Title>
      <nav>
        <NavigationListUl>
          <li>
            <NavigationLink exact activeClassName="active" to="/">
              Homepage
            </NavigationLink>
          </li>
          <li>
            <NavigationLink activeClassName="active" to="/about">
              About
            </NavigationLink>
          </li>
        </NavigationListUl>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  /* Other styles here */
`;

const Title = styled.h1`
  font-size: 32px;
  /* Other styles here */
`;

const NavigationListUl = styled.ul`
  list-style-type: none;
  display: flex;
`;

const NavigationLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  padding: 0 16px;

  &.active {
    color: red;
  }

  &:after {
    content: "";
    position: absolute;
    background-color: currentColor;
    left: 0;
    right: 0;
    bottom: -5px;
    width: 50%;
    margin: auto;
    height: 3px;
    transform: scaleX(0);
    transform-origin: center center;
    border-radius: 2px;
  }

  &.active:after {
    /* transition: transform 250ms, opacity 150ms; */
    transform: scaleX(1);
    opacity: 1;
  }
`;

export default Header;
