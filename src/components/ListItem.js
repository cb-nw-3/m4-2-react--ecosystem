import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const ListItem = ({ fruit }) => {
  return (
    <Wrapper>
      <Link to={`./items/${fruit.id}`}>
        <FruitImage src={fruit.imageSrc} />
        <FruitName>{fruit.name}</FruitName>
        <Separator />
        <LatinName>{fruit.latinName}</LatinName>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 14px 46px -9px rgba(0, 0, 0, 0.75);
  background-color: white;
`;

const FruitImage = styled.img`
  width: 70%;
  border-radius: 20px;
  margin-top: 20px;
`;

const FruitName = styled.h2`
  font-size: 24px;
  font-weight: 1000;
  text-align: center;
  background-color: white;
`;

const Separator = styled.div`
  background-color: lightgray;
  width: 30px;
  height: 5px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const LatinName = styled.p`
  font-size: 16px;
  font-style: italic;
  text-align: center;
  margin-bottom: 20px;
  background-color: white;
`;

export default ListItem;
