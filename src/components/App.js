import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyles'

function Header() {
  return (
    <Wrapper>
      <Title>Fruit Emporium</Title>
      <Navbar>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Navbar>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

const Title = styled.h1`
  font-size: 32px;
  /* Other styles here */
`;

const Navbar = styled.div`
  border: 2px solid orange;
  padding-left: 20px;
`;

function App(props) {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route path="/">Homepage</Route>
          <Route path="/about">About</Route>
          <Route path="/items/:itemId">Items</Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
