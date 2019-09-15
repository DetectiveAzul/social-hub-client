import React, { Component } from 'react';
import { Router } from '@reach/router'
//Components
import NoFound from './containers/NoFound';

//Other

class App extends Component {
    render() {
        return(
                <Router>   
                    <NoFound default />
                </Router>
        );
    }
}

export default App;
