import React from "react";
import styled from 'styled-components';

function About(props) {
    return (
        <div>
            <Paragragh>
                Fruit emporium is founded on a very simple principle:{ ' ' }  
                <strong>
                    Fruit is good.
                </strong>
            </Paragragh>
            <Paragragh>
                We carry the finest selection of produce from around the world, from tart citrus to sweet cherries. Our sellers are world-class, and your fruit is guaranteed to be worthy of auction in Asian markets.                
            </Paragragh>
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

export default About;
