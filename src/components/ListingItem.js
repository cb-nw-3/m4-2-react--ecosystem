import React from 'react';

import styled from 'styled-components';


function ListingItem(props) {
  console.log('ListingItem', props)
  return <StyledDiv>
    <StyledImage src={props.item.imageSrc}></StyledImage>
    <StyledName>{props.item.name}</StyledName>
    <StyledLatinName>{props.item.latinName}</StyledLatinName>
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

export default ListingItem;