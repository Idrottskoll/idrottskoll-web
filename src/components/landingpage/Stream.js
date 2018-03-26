import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

export default class Stream extends Component {
  render() {
    return (
      <div className="bg-blue bp-20">
        <Grid className="bm-30">
          <Row>
            <Col md={12} className="tm-30">
              <h2 className="color-white">Streams är igång!</h2>
              <p className="color-white">Klicka den bana du är intresserad av för att se livestreamen.</p>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <div className="bg-light-grey bp-20 usp-container">
                <Image className="usp-icon tm-20 bm-10" src={require("../../images/icons/one-icon.svg")} />
                <h3 className="center">Bana 1</h3>
              </div>
            </Col>
            <Col md={3}>
              <div className="bg-light-grey bp-20 usp-container">
                <Image className="usp-icon tm-20 bm-10" src={require("../../images/icons/two-icon.svg")} />
                <h3 className="center">Bana 2</h3>
              </div>
            </Col>
            <Col md={3}>
              <div className="bg-light-grey bp-20 usp-container">
                <Image className="usp-icon tm-20 bm-10" src={require("../../images/icons/three-icon.svg")} />
                <h3 className="center">Bana 3</h3>
              </div>
            </Col>
            <Col md={3}>
              <div className="bg-light-grey bp-20 usp-container">
                <Image className="usp-icon tm-20 bm-10" src={require("../../images/icons/four-icon.svg")} />
                <h3 className="center">Bana 4</h3>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
