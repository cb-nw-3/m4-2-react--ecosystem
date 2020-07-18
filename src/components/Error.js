import React from "react";
import styled from 'styled-components';

function Error(props) {
    return (
        <DIV>
            <h2>
                404: Page not found
            </h2>
            <Paragragh>
                Sorry, we can't find the page you're looking for. Please check the URL or click Home.
            </Paragragh>
        </DIV>
    );
}

const Paragragh = styled.p`
    font-size: 18px;
    line-height: 1em;
    color: #333;
    padding-bottom: 20px;
`;

const DIV = styled.div`
    background-color: #F1F1F1;
    min-height: 25em;
    padding: 2px 30px 0;
`;

export default Error;
