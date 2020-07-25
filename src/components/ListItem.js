import React from "react";
import styled from "styled-components";

function ListItem(props) {
  return (
    <Item>
      <Image src={props.image} />
      <Copy>{props.name}</Copy>
      <Copy2>{props.lname}</Copy2>
    </Item>
  );
}

export default ListItem;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 200px;
  border-radius: 15px;
`;

const Copy = styled.h1`
  font-size: 20px;
`;

const Copy2 = styled.h1`
  font-size: 16px;
  font-style: italic;
  color: grey;
`;
