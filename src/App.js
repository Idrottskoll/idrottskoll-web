import React, { Component } from 'react';
import Home from './views/Home';
import './App.scss';
import ReactGA from 'react-ga';


class App extends Component {
  constructor() {
    super();
    this.state = {
      someData: null,
    };

    ReactGA.initialize('UA-112717712-1');
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return <h1>Idrottskoll</h1>
  }
}

export default App;
