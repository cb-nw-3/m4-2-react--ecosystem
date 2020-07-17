import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

function Header() {
    return (
        <Wrapper>
            <Title>Fruit Emporium</Title>
            <nav>
                <NavBar>
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            About
                        </NavLink>
                    </li>
                </NavBar>
            </nav>
        </Wrapper>
    );
}

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding-left: 30px;
    padding-right: 30px;
`;

const Title = styled.h1`
    font-size: 32px;
`;

const NavBar = styled.ul`
    list-style: none;
    display: flex;
`;

const NavLink = styled(Link)`
    margin: 0 20px;
    color: blue;
    text-decoration: none;
`;

export default Header;
