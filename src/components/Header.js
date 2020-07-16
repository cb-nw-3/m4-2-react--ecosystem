import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <Wrapper>
      <Title>Fruit Emporium</Title>
        <Navigation>
          <NavigationLink exact activeClassName='active' to='/'>
            Home
          </NavigationLink>
          <NavigationLink exact activeClassName='active' to='/about'>
            About
          </NavigationLink>
        </Navigation>
          
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display:flex;
  justify-content:space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  padding: 20px;
`;

const Navigation = styled.nav`
  justify-content: space-between;
  padding: 0 15px;
`;

const NavigationLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  margin: 20px 40px;
  color: blue;

  &.active {
    color: fuchsia;
    text-decoration: underline;
  }
`;
      
export default Header;