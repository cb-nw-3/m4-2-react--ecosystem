import React from "react";
import styled from 'styled-components';

import ListingGrid from './ListingGrid';

import { items } from '../data';

function Homepage(props) {
    return (
        <div>
            <Paragragh>
                Fruit emporium sells the finest fruits from this world and beyond.
            </Paragragh>
            <Paragragh>
                <strong>
                    Browse items:
                </strong>
            </Paragragh> 
            <ListingGrid itemList={ items } />
        </div>  
    );
}

const Paragragh = styled.div`
    font-size: 18px;
    line-height: 1em;
    color: #333;
    padding-bottom: 20px;

    & strong {
        color: black;
    }
`;

export default Homepage;
