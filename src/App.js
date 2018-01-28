import React, { Component } from 'react';
import './App.scss';
import ReactGA from 'react-ga';

import Usp from './components/landingpage/Usp';
import About from './components/landingpage/About';
import CaseSlider from './components/landingpage/CaseSlider';

import Footer from './components/shared/Footer';

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
          <About />
          <CaseSlider />
          <Footer />
        </div>
      );
    }
}
