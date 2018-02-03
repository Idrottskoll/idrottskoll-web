import React, { Component } from 'react';
import './App.scss';
import ReactGA from 'react-ga';
import SigninModal from './components/SigninModal';
import SignoutButton from './components/SignoutButton';

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
                <h1>Idrottskoll</h1>
                {!localStorage.token ? <SigninModal /> : <SignoutButton />}
            </div>
        );
    }
}
