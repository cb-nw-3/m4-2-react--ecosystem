import React from 'react';
//The links should use a `<Link>` component to link towards the relevant pages
//(also imported from `react-router-dom`).
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 20px
  align-items: center;
  

`;

const Title = styled.h1`
  font-size: 32px;
  /* Other styles here */
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #6b45e7;
  padding: 20px;
`;


const Header = () => {
    return (
        <Wrapper>
            <Title>Fruit Emporium</Title>
            <nav>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/about">About</StyledLink>
            </nav>
          
        </Wrapper>
    );
}



export default Header;