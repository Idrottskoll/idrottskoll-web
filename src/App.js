import React, { Component } from 'react';
import './App.scss';
import ReactGA from 'react-ga';

import Hero from './components/landingpage/Hero';
import Usp from './components/landingpage/Usp';
import About from './components/landingpage/About';
import CaseSlider from './components/landingpage/CaseSlider';
import Stream from './components/landingpage/Stream';
// import Navigation from './components/usercontent/Navigation';
// import Video from './components/usercontent/Video';
import Footer from './components/shared/Footer';
import Streams from './components/video/Streams';

export default class App extends Component {
    constructor() {
        super();
        ReactGA.initialize('UA-112717712-1');
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return (
            <div>
                <Hero />
                <Streams />
                <Stream />
                <Usp />
                <About />
                <CaseSlider />
                <Footer />
            </div>
        );
    }
}
