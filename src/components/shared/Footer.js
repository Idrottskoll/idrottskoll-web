import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

export default class Footer extends Component {
  render() {
    return (
      <div className="bg-blue tm-40 footer color-white">
        <Grid>
          <Row className="tp-20 bp-20">
            <Col md={6}>
              <h4>Intresserad av en video?</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                <br></br><br></br>
                Beställ din video här
                </p>
            </Col>
            <Col md={6} className="right">
              <h4>Kontakta Idrottskoll</h4>
              <p>
                Ansvarig för Idrottskoll<br></br>
                Joakim Remler<br></br>
                joakim@idrottskoll.se<br></br>
                0733093086
                <br></br><br></br>
                Copyright © 2018
                </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
