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
                Genom att skicka ett mail till joakim@idrottskoll.se så kan du lägga en förfrågan av inspelning. Därefter ger vi dig ett prisförslag. När videon sedan är inspelat så kan du nå den genom att logga in på hemsidan. Inom snar framtid kommer du även kunna använda dig av vår app.
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
