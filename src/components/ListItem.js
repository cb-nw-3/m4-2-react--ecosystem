import React from "react";
import styled from "styled-components";

const ListItem = ({ fruit }) => {
  return (
    <Wrapper>
      <FruitImage src={fruit.imageSrc} />
      <FruitName>{fruit.name}</FruitName>
      <LatinName>{fruit.latinName}</LatinName>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;

const FruitImage = styled.img`
  width: 85%;
  border-radius: 4px;
`;

const FruitName = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  margin: 0px 15px;
`;

const LatinName = styled.p`
  font-size: 16px;
  font-weight: normal;
  text-align: left;
  margin: 0px 15px;
`;

export default ListItem;
