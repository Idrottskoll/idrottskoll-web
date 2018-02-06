import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

export default class Video extends Component {
  render() {
    return (
      <div className="tm-40">
        <Grid>
          <Row className="bm-20 tm-20">
            <Col md={4}>
              {/* Add .sream to div below to define the stream video */}
              <div className="video bg-light-grey">
                <video src={require('../../videos/background.mov')}></video>
                <Image className="playbutton" src={require("../../images/icons/playbutton.svg")} />
               <div className="text-content rm-20 lm-20 tm-20 bm-20">
                 <h3>Video title</h3>
                 <p>Video description</p>
               </div>
               </div>
            </Col>
          </Row>
        </Grid>
      </div>

    );
  }
}
