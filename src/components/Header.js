import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const H1 = styled.h1``;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
`;

const ListItem = styled.li`
  flex: 1;
  margin: 5px;
  color: #6a0096;
`;

const Navigation = styled(NavLink)`
  padding: 5px;
  text-decoration: none;
  &:active {
    color: #fff;
    background-color: #6a0096;
    border-radius: 4px;
  }
`;

const Header = () => {
  return (
    <Nav>
      <H1>Fruit Emporium</H1>
      <List>
        <ListItem>
          <Navigation to="/">Home</Navigation>
        </ListItem>
        <ListItem>
          <Navigation to="/about">About</Navigation>
        </ListItem>
      </List>
    </Nav>
  );
};

export default Header;
