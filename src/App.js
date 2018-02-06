import React, { Component } from 'react';
import './App.scss';
import ReactGA from 'react-ga';

import Hero from './components/landingpage/Hero';
import Usp from './components/landingpage/Usp';
import About from './components/landingpage/About';
import CaseSlider from './components/landingpage/CaseSlider';
// import Navigation from './components/usercontent/Navigation';
import SigninModal from './components/SigninModal';
import SignoutButton from './components/SignoutButton';
import Footer from './components/shared/Footer';
import Streams from './components/video/Streams';

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
                {/* Check if user is signin: !this.props.authenticated ? <SigninModal /> : <SignoutButton /> */}
                {!localStorage.token ? <SigninModal /> : <SignoutButton />}
                <Hero />
                <Usp />
                <About />
                <CaseSlider />
                <Footer />
            </div>
        );
    }
}
