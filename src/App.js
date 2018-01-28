import React, { Component } from 'react';
import './App.scss';
import ReactGA from 'react-ga';

import Usp from './components/Usp';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            someData: null
        };

        ReactGA.initialize('UA-112717712-1');
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return (
            <div>
                <Usp />
            </div>
        );
    }
}
