import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

function ListingSeller(props) {
  console.log('ListingSeller', props)
  return <StyledDiv>
    <StyledLinkToItem to={`/sellers/${props.seller.id}`}><StyledImage src={props.seller.avatarSrc}></StyledImage></StyledLinkToItem>
    <StyledName>{props.seller.id.charAt(0).toUpperCase() + props.seller.id.slice(1)}</StyledName>
    <StyledLatinName>{props.seller.storeName}</StyledLatinName>
  </StyledDiv>
}

const StyledDiv = styled.div`
  width: 200px;
  text-align: center;
  background: #f1f1f1;
  border-radius: 15px;
  position: relative;
`
const StyledImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 15px;
  margin-top: -15px;
`

const StyledName = styled.h3`
  padding: 0;
  margin: 0;
  padding-bottom: 15px;
  font-size: 24px;
`

const StyledLatinName = styled.h4`
  padding: 0;
  margin: 0;
  font-style: italic;
  font-weight: normal;
  padding-bottom: 15px;
`

const StyledLinkToItem = styled(Link)`
  height: 150px;
  width: 150px;
`


export default ListingSeller;