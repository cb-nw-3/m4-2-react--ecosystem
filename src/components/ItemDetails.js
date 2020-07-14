import React from "react";
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import { items } from "../data"

function ItemDetails() {
    const { itemId } = useParams();
    const item = items[itemId]
    return (
        <div>
<div>{JSON.stringify(item)}</div>
        </div>
    )
}

export default ItemDetails;