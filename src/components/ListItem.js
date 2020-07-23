import React from "react";
import styled from "styled-components";

function ListItem(props) {
  return (
    <Item>
      <Image src={props.image} />
      <Copy>{props.name}</Copy>
      <Copy>{props.lname}</Copy>
    </Item>
  );
}

export default ListItem;

const Item = styled.div`
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const Image = styled.img`
  width: 200px;
`;

const Copy = styled.h1`
  font-size: 20px;
`;
