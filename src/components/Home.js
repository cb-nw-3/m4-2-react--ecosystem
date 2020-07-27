import React from 'react';
import styled from 'styled-components';
import ListingGrid from './ListingGrid';
import {items} from '../data';

function Home(props){
    return(
        <Wrapper>
            <p>Fruit emporium sells the finest fruits from this world and beyond.</p>
            <p>Browse items:</p>
            <ListingGrid itemList={Object.values(items)} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
`;

export default Home;