import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Header() {
    return(
        <Wrapper>
            <Logo>Fruit Emporium</Logo>
            <nav>
                <NavList>
                    <li>
                        <NavigLink to='/'>Homepage</NavigLink>
                    </li>
                    <li>
                        <NavigLink to='/about'>About</NavigLink>
                    </li>
                </NavList>
            </nav>
        </Wrapper>
    ) 
}

const Wrapper = styled.header`
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.h1`
    margin-left:50px;
    font-size: 40px;
    font-weight: bolder;
`;

const NavList = styled.ul`
    list-style-type: none;
    min-width: 300px;
    display:flex;
    justify-content: space-space-evenly;
`

const NavigLink = styled(NavLink)`
    font-size: 20px;
    text-decoration: none;
    padding: 0 25px;
    font-weight: bold;

    &:hover {
        text-decoration: underline;
        color: darksalmon;
    }
`;

export default Header;