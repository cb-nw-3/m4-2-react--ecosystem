import React from 'react';
import styled from 'styled-components';
import SellerGrid from './SellerGrid';

function Sellers(props) {
  console.log(props.array);  
  return (
    <div>
      <ParagraphOne>Fruit Emporium sells the finest fruits from this world and beyond.</ParagraphOne>
      <ParagraphTwo>Browse Sellers:</ParagraphTwo>
      <SellerGrid sellerList={props.array[0]}/>
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
export default Sellers;