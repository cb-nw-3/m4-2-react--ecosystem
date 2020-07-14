import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Wrapper>
      <Title>Fruit Emporium</Title>
        <Navigation>
          <Link to='/'>
            Home
          </Link>
          <Link to='/about'>
            About
          </Link>
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

  & a{
      display: inline-block;
      text-decoration: none;
      margin: 20px 40px;
      color: blue;
    }
`
export default Header;