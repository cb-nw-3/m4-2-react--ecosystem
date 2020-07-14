import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';


function Header(props) {
    return (
        <Nav>
            <h1>Fruit Emporium</h1>
            <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            </div>
        </Nav>
    )
}

const Nav = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export default Header