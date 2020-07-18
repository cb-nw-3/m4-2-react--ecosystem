import React from "react";
import styled from "styled-components";

const ListingGrid = ({ itemList }) => {
  return (
    <Wrapper>
      {itemList.map((item, index) => {
        return (
          <Item key={item.id + index}>
            <ItemImage src={item.imageSrc} />
            <ItemName>{item.name}</ItemName>
            <ItemLatin>{item.latinName}</ItemLatin>
          </Item>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.span`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 10px;
  grid-column-gap: 10px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 30px;
  width: 250px;
  border-radius: 10px;
  box-shadow: 2px 5px 36px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

const ItemImage = styled.img`
  width: 200px;
  border-radius: 10px;
`;

const ItemName = styled.span`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
  padding: 10px;
`;

const ItemLatin = styled.span`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-style: italic;
`;

export default ListingGrid;
