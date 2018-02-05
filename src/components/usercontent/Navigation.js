import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Navigation extends Component {
  render() {
    return (
      <div className="hero-module-nav bm-40">
        <Grid className="hero-content">
          <Row className="steps profile">
            <Col md={4}>
              <div className="step hover">
                <img src={'src/images/icons/user.png'} className="stepIcons"/>
                <h3 className="color-white">Min profil</h3>
              </div>
            </Col>
            <Col md={4}>
              <div className="step hover">
                <img src={'src/images/icons/user.png'} className="stepIcons"/>
                <h3 className="color-white">Min profil</h3>
              </div>
            </Col>
            <Col md={4}>
              <div className="step hover">
                <img src={'src/images/icons/user.png'} className="stepIcons"/>
                <h3 className="color-white">Min profil</h3>
              </div>
            </Col>
          </Row>

      </Grid>
      </div>
    );
  }
}
