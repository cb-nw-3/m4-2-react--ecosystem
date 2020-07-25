import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Header() {
    return(
        <Wrapper>
            <Logo>Fruit Emporium</Logo>
            <nav>
                <ul>
                    <li>
                        <NavigLink to='/'>Homepage</NavigLink>
                    </li>
                    <li>
                        <NavigLink to='/about'>About</NavigLink>
                    </li>
                </ul>
            </nav>
        </Wrapper>
    ) 
}

const Wrapper = styled.header`
    display: flex;
`;

const Logo = styled.h1`
    font-size: 40px;
    font-weight: bolder;
`;

const NavigLink = styled(NavLink)`
    color: blue;
    font-weight: bold;
`;

export default Header;