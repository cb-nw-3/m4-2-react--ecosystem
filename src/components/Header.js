import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const Header = () => {
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
    align-items: center;
    height: 100px;
    background: white;
    padding: 0 10px;
    box-shadow: 0px 0px 10px;
    margin-bottom: 40px;

    @media (min-width: 680px){
      padding: 0 30px;
    }
  `;

const Title = styled.h1`
    font-size: 32px;
    font-weight: 600;
  `;

const Navigation = styled.ul`
    display: flex;
    flex-direction: row;
    font-size: 22px;
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