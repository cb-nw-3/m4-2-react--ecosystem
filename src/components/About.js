import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';
import styled from 'styled-components';
function About() {
    return (
        <div>
          <Paragraph>Fruit emporium is founded on a very simple principle: <strong>Fruit is good.</strong></Paragraph>
          <Paragraph>We carry the finest selection of produce from around the world, from tart citrus to sweet cherries.Our sellers are world-class, and your fruit is guaranteed to be worthy of auction in Asian markets.</Paragraph>
        </div>
       
    )
}

const Paragraph = styled.p`
  display: block;
  margin:20px 20px 40px 22px;
  font-size: 1.2em;
`
export default About;