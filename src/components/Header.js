import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  /* Other styles here */
`;

const Title = styled.h1`
  font-size: 32px;
  /* Other styles here */
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #6b45e7;
`;

const Header = () => {
    return (
        <Wrapper>
            <Title>Fruit Emporium</Title>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/about">About</StyledLink>
        </Wrapper>
    );
}



export default Header;