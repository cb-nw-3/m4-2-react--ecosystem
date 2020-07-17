import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  return (
    // <p>Hello</p>
    <Wrapper>
      <Title exact={"true"} to ="/">Fruit Emporium</Title>
      <nav>
        <NavList>
          <li>
            <NavLink exact={"true"} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </NavList>
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding-top: 30px;
  padding-bottom: 30px; */
  padding: 2% 5%;
`;

const Title = styled(Link)`
  text-decoration: none;
  font-size: 48px;
  font-weight: 800;
  color: black;
`;

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  padding-right: 50px;
  
`;

const NavLink = styled(Link)`
  text-decoration: none;
  padding: 1rem;
  margin: 2rem;
  font-size: 24px;
  font-weight: 800;
  color: #4C0CD4;

  &:hover {
    color: #FF0073;
    padding-bottom: 1px;
    border-bottom: 1px solid #FF0073;
    transition: all 0.3s ease-in-out;
  }
`;

export default Header;
