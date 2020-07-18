import React from 'react';
import styled from 'styled-components';
import ListingGrid from './ListingGrid';

function Home(props) {
  console.log(props.array);  
  return (
    <div>
      <ParagraphOne>Fruit Emporium sells the finest fruits from this world and beyond.</ParagraphOne>
      <ParagraphTwo>Browse items:</ParagraphTwo>
      <ListingGrid itemList={props.array[1]}/>
    </div>      
  )
}

const ParagraphOne = styled.p`
  margin-left: 22px;
  font-size: 1.15em;
`;

const ParagraphTwo = styled.p`
  margin-left: 22px;
  font-weight:bold;
  font-size: 1.25em;
`
export default Home;

