import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
      <Grid className="tm-40">
        <Row>
          <Col md={4}>
            <div className="bg-light-grey bp-20 usp-container">
              <Image className="usp-icon tm-20 bm-10" src={require("../../images/icons/order.svg")} />
              <h3 className="center">1. Lägg order</h3>
              <p className="center rm-20 lm-20">Genom att skicka en förfrågan till joakim@idrottskoll.se så kan du lägga din order för den match du vill spela in.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="bg-light-grey bp-20 usp-container">
              <Image className="usp-icon tm-20 bm-10" src={require("../../images/icons/film-video.svg")} />
              <h3 className="center">2. Videon filmas</h3>
              <p className="center rm-20 lm-20">Idrottskoll bearbetar din order och startar sedan upp sitt system och spelar in den match du har önskat.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="bg-light-grey bp-20 usp-container">
              <Image className="usp-icon tm-20 bm-10" src={require("../../images/icons/play-video.svg")} />
              <h3 className="center">3. Titta på videon</h3>
              <p className="center rm-20 lm-20">När beställningen är klar och betald, kan du som beställare enkelt nå inspelningen när du loggar in till dina sidor.</p>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}
