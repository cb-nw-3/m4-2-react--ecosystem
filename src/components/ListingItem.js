import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from './Button';

// Passing the itemlist imported from ListingGrid and assigning it to different tags, used deconstruction to assign the object value to the page element.

const ListingItem = ({ item }) => {
  console.log(item);
  return (
    <CardLink to={`/items/${item.id}`}>
      <Wrapper>
        <FruitPic src={item.imageSrc} />
        <Name>{item.name}</Name>
        <Decoration />
        <LatinName>{item.latinName}</LatinName>
      </Wrapper>
    </CardLink>
  );
};

// CSS applied to Components.

const CardLink = styled(Link)`
  text-decoration: none;
  transition: transform 250ms;

  &:hover {
    transform: scale(1.05);
    transform-origin: center center;
  }
`;

const Wrapper = styled.div`
  padding: 36px;
  border-radius: 16px;
  box-shadow: 2px 5px 36px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const FruitPic = styled.img`
  border-radius: 12px;
  width: 80%;
`;

const Name = styled.h3`
  font-size: 24px;
  color: #333;
  margin-top: 12px;
`;

const LatinName = styled.h5`
  color: #999;
  font-style: italic;
  font-size: 16px;
  font-weight: 300;
`;

const Decoration = styled.div`
  width: 50px;
  height: 5px;
  border-radius: 0 0 50% 50%;
  background: #000;
  opacity: 0.1;
  margin: 12px auto;
`;

export default ListingItem;
