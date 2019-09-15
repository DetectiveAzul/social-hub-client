import React from 'react';
import { Redirect } from '@reach/router';

const NoFound = () => {
    return <Redirect
        noThrow
        from="/:giberish"
        to="/" 
    />
}

export default NoFound;