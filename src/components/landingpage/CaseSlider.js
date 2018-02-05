import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
// import Slider from 'react-slick';

export default class CaseSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000
    };
    return (
      <div className="tm-40">
        <Grid>
          <Row className="tm-20 bm-10">
            <Col md={12}><h2>Några turneringar som Idrottskoll har filmat</h2></Col>
          </Row>
          <Row className="bm-20">
            {/* <Slider {...settings}>
              <Col md={3}><div className="case bg-light-grey"><h4>Junior SM 2016 i squash</h4></div></Col>
              <Col md={3}><div className="case bg-light-grey"><h4>Junior SM 2016 i squash</h4></div></Col>
              <Col md={3}><div className="case bg-light-grey"><h4>Junior SM 2016 i squash</h4></div></Col>
              <Col md={3}><div className="case bg-light-grey"><h4>Junior SM 2016 i squash</h4></div></Col>
              <Col md={3}><div className="case bg-light-grey"><h4>Junior SM 2016 i squash</h4></div></Col>
              <Col md={3}><div className="case bg-light-grey"><h4>Junior SM 2016 i squash</h4></div></Col>
          </Slider> */}
          </Row>
        </Grid>
      </div>

    );
  }
}
