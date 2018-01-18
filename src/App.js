import React, { Component } from 'react';
import Home from './views/Home';
import './style.scss';
import ReactGA from 'react-ga';

class MyApp extends Component {
  constructor() {
    super();
    this.state = {
      someData: null,
    };

    ReactGA.initialize('UA-112717712-1');
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return <h1>MyApp is being tracked by Google Analytics</h1>;
  }
}

export default MyApp;
