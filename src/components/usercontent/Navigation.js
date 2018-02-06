import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Navigation extends Component {
  render() {
    return (
      <div className="hero-module-nav bm-40">
        <Grid>
          <Row>
            <Col md={12}>
              <div className="hero-content center color-white">
                <h1 className="">Välkommen!</h1>
                <h3>Här kan du se dina videos och eventuell stream som är igång.</h3>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
