import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListingItem = ({ item }) => {
  return (
    <CardLink to={`/items/${item.id}`}>
      <Wrapper>
        <FruitPic src={item.imageSrc} />
        <Name>{item.name}</Name>
        <LatinName>{item.latinName}</LatinName>
      </Wrapper>
    </CardLink>
  );
};

const CardLink = styled(Link)`
color: red;
`;

const Wrapper = styled.div`
  padding: 20px;
  border-radius: 20px;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const FruitPic = styled.img`
  border-radius: 15px;
  margin-top: 15px;
  width: 75%;
`;

const Name = styled.h3`
  font-size: 30px;
  color: black;
  margin-top: 15px;
`;

const LatinName = styled.h5`
  color: #CDCDCD;
  font-style: italic;
  font-size: 15px;
`;


export default ListingItem;
