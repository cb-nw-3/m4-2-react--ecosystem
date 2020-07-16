import React from 'react';

const Header = () => {
    return (
        <Wrapper>
            <Title>Fruit Emporium</Title>
            <NavigationLink to="/">Home</NavigationLink>
            <NavigationLink to="/about">About</NavigationLink>
        </Wrapper>
    )
}
export default Header;