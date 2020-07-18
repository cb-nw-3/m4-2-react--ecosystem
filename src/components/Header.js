import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

const Wrapper = styled.header`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px;
        width: 60%;
    `;

const Title = styled.h1`
    font-size: 32px;
    /* Other styles here */
  `;

const Navbar = styled.div`
    display: flex;
    margin-right: 20px;
  `;

const NavItem = styled.div`
    margin-left: 30px;
  `

function Header() {
    return (
        <Wrapper>
            <Title>Fruit Emporium</Title>
            <Navbar>
                <Link to="/"><NavItem>Home</NavItem></Link>
                <Link to="/about"><NavItem>About</NavItem></Link>
            </Navbar>
        </Wrapper>
    );
}

export default Header;