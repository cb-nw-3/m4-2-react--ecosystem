import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';
import Header from './Header';
import Homepage from './Homepage';
import About from './About';

function App(props) {
  return (
    <Router>
      <Wrapper>
        <Header></Header>
        <Switch>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/'>
            <Homepage></Homepage>
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  );
}

const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Sora&display=swap');
  font-family: 'Sora', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0;
  margin: 0;
  background-color: #f9f9f9;
  height: 100vh;
  width: 100vw;
  font-size: 1rem;
  overflow: hidden;
`;

export default App;
