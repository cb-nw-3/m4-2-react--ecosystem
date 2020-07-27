import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import ListingItem from './ListingItem';

function ListingGrid({itemList}){
    return (
        <Wrapper>
            {itemList.map((item) => (
                <ListingItem item={item} />
            ))}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
    justify-content: space-evenly;
    align-items: center;
`;

export default ListingGrid;