import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
`;

const Item = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 0 30px 0 30px;
  margin: 15px;
  border-radius: 4px;
  text-align: center;
`;

const Image = styled.img`
  border-radius: 4px;
  display: block;
  max-width: 300px;
`;

const Bar = styled.hr`
  height: 10px;
  width: 80px;
  background-color: #ccc;
  border-radius: 5px;
`;

const Span = styled.span`
  font-style: italic;
`;

const ListingGrid = (props) => {
  const items = props.items;
  console.log(items);
  return (
    <Container>
      {items.map((item) => (
        <Link to={`/items/${item.id}`} key={item.id}>
          <Item>
            <Image src={item.imageSrc} />
            <h3>{item.name}</h3>
            <Bar />
            <Span>{item.latinName}</Span>
          </Item>
        </Link>
      ))}
    </Container>
  );
};

export default ListingGrid;
