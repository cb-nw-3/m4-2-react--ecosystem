import React from 'react';
import styled from 'styled-components';

import ListingGrid from './ListingGrid';
import Paragraph from './Paragraph'
import { items } from '../data';

const Home = () => {
    return (
        <>
            <Paragraph>
                Fruit emporium sells the finest fruits from this world and beyond.
            </Paragraph>
            <Paragraph>
                <strong>Browse items:</strong>
            </Paragraph>
            <ListingGrid itemList={Object.values(items)} />
        </>
    );
};


export default Home;