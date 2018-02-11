import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

export default class Hero extends Component {
  render() {
    return (
      <div className="video-container bm-40">
         <video src={require('../../videos/background.mov')} autoPlay loop></video>
        <div className="hero-module">
          <div className="hero-content">
            <div className="logotype">
              <Image className="usp-icon tm-20 bm-10" src={require("../../images/icons/logotype.png")} />
            </div>
            <br />
            <h1 className="color-white">
              Idrottskoll <br />
                <span className="smaller-text">
                  för dig som vill utvecklas inom idrott
                </span>
            </h1>
          </div>
        </div>
      </div>

    );
  }
}
