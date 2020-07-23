import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import GlobalStyles from './GlobalStyles';
import styled from 'styled-components';
import Home from './Home';
import About from './About';

function App(props) {
  return (
    <Router>
      <Wrapper>
        <Header />
        <Main>
        <Switch>
          <Route exact path="/">
          <Home /></Route>
          <Route path="/about">
          <About /></Route>
        </Switch>
        </Main>
      </Wrapper>
      <GlobalStyles />
    </Router>
  );
}

const Wrapper = styled.div`
  max-width: 900px;
  margin: auto;
`;

const Main = styled.main`
  padding-top: 40px;
`;

export default App;
