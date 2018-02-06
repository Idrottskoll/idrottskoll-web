import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={4}>
            <div className="bg-light-grey bp-20">
              <Image src={require("../../images/icons/add-order-icon--black.svg")} />
              <h3 className="center">1. Lägg order</h3>
              <p className="center rm-20 lm-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="bg-light-grey bp-20">
              <Image src={require("../../images/icons/film-movie-icon--black.svg")} />
              <h3 className="center">2. Videon filmas</h3>
              <p className="center rm-20 lm-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="bg-light-grey bp-20">
              <Image src={require("../../images/icons/watch-movie-icon--black.svg")} />
              <h3 className="center">3. Titta på videon</h3>
              <p className="center rm-20 lm-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}
