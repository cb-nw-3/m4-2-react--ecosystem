import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { sellers, items } from '../data.js';

import GlobalStyle from './GlobalStyles';
import Header from './Header';
import ListingGrid from './ListingGrid';

const Wrapper = styled.div`
  padding: 30px;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;

const Top = styled.div`
  font-size: 20px;
  width: 100%;
  margin-bottom: 30px;
  `;

const Browse = styled.p`
  font-weight: bold;
  `;

function Homepage(props) {
  return (
    <Wrapper>

      <Top>

        <div>Fruit emporium sells the finest fruits from this world and beyond.</div>

        <div><Browse>Browse items:</Browse></div>
      </Top>

      <ListingGrid itemList={props.fruit} />

    </Wrapper>
  )
}

function About() {
  return (
    <Wrapper>
      <div>Fruit emporium is founded on a very simple principle: Fruit is good.</div>

      <div>We carry the finest selection of produce from around the world, from tart citrus to sweet cherries. Our sellers are world-class, and your fruit is guaranteed to be worthy of auction in Asian markets.</div>
    </Wrapper>
  )
}

function App(props) {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <Homepage fruit={Object.values(items)} />
          </Route>
          <Route path="/about">About</Route>
          <Route path="/items/:itemId">Items</Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
