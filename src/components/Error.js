import React from 'react';
import styled from 'styled-components';

function Error(props) {
    return (
        <DIV>
            <h2>
                404: Page not found
            </h2>
            <p>
                Sorry, we can't find the page you're looking for. Please check the URL or click Home.
            </p>
        </DIV>
    );
}

const DIV = styled.div`
    background-color: #F1F1F1;
    min-height: 20em;
    padding: 2em;
`;

export default Error;
