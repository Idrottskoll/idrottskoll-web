import React, { Component } from 'react';
import { Grid, Row, Col, Image, Modal, Button, Tooltip, OverlayTrigger, Popover } from 'react-bootstrap';

export default class Stream extends Component {
  constructor(props, context) {
  super(props, context);

  this.handleShow = this.handleShow.bind(this);
  this.handleClose = this.handleClose.bind(this);

  this.state = {
    show: false
  };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
    console.log('hello');
  }
  render() {
    const popover = (
    <Popover id="modal-popover" title="popover">
      very popover. such engagement
    </Popover>
  );
  const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
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
                <a onClick={this.handleShow}>
                  <Image className="usp-icon tm-20 bm-10" src={require("../../images/icons/one-icon.svg")} />
                </a>
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
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
            <h4>Popover in a modal</h4>
            <p>
              there is a{' '}
              <OverlayTrigger overlay={popover}>
                <a href="#popover">popover</a>
              </OverlayTrigger>{' '}
              here
            </p>
            <h4>Tooltips in a modal</h4>
            <p>
              there is a{' '}
              <OverlayTrigger overlay={tooltip}>
                <a href="#tooltip">tooltip</a>
              </OverlayTrigger>{' '}
              here
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
