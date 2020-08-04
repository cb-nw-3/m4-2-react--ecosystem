import React from "react";
import styled from "styled-components";

function ListItem(props) {
  return (
    //name it in parent and pass it to the children
    <Item>
      <Image src={props.image} />
      <Copy>{props.name}</Copy>
      <Copy2>{props.lname}</Copy2>
    </Item>
  );
}
// ListItem USES THE PROPS IT GOT FROM ITS PARENT WITH PROP.
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
  font-family: "Roboto", sans-serif;
  font-size: 20px;
`;

const Copy2 = styled.h1`
  font-size: 16px;
  font-style: italic;
  color: grey;
`;
