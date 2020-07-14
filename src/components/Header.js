import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <Wrapper>
      <Title>Fruit Emporium</Title>
      <nav>
        <Navigation>
          <li>
            <NavigationLink to="/" exact activeClassName="selected">Home</NavigationLink>
          </li>
          <li>
            <NavigationLink to="/about" exact activeClassName="selected">About</NavigationLink>
          </li>
        </Navigation>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    height: 100px;
  `;

const Title = styled.h1`
    font-size: 32px;

  `;

const Navigation = styled.ul`
    display: flex;
    flex-direction: row;
    font-size: 24px;
    list-style-type:none;
  `

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  margin-left: 15px;

  &.selected{
    color: red;
    text-decoration-line: underline;
  }
`
export default Header;