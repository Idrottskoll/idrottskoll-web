import React from 'react';
import { Modal, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export default class SigninModal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
            email: '',
            password: '',
            validEmail: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/,
            buttonStyle: 'danger'
        };
    }

    signin = async () => {
        if (!this.state.validEmail.test(this.state.email)) {
            return false;
        }

        if (this.state.email.length < 5 && this.state.password.length < 3) {
            return false;
        }

        const user = await axios
            .post('https://www.ikoll.se/api/v1/login', {
                email: this.state.email,
                password: this.state.password
            })
            .then(response => {
                if (response.status === 200 && response.data.token) {
                    localStorage.setItem('token', response.data.token);
                    this.handleClose();
                } else {
                    console.log(response);
                }
            });
    };

    /**
     * @param string email
     * @return string
     */
    validateEmail(email) {
        if (email.length < 5) {
            return 'error';
        }

        if (!this.state.validEmail.test(email)) {
            return 'error';
        }

        return 'success';
    }

    /**
     * @param string email
     */
    validatePassword(password) {
        if (password.length < 3) {
            return 'error';
        }

        return 'success';
    }

    /**
     * @param string email
     */
    handleEmail = email => {
        this.setState({ email: email.target.value });
    };

    /**
     * @param string password
     */
    handlePassword = password => {
        this.setState({ password: password.target.value });
    };

    handleClose = () => {
        this.setState({ show: false });
    };

    handleShow = () => {
        this.setState({ show: true });
    };

    render() {
        return (
            <div>
                <Button bsStyle="primary" onClick={this.handleShow} className="login">
                    Logga in
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Logga in</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <FormGroup
                                controlId="form-email"
                                validationState={this.validateEmail(this.state.email)}>
                                <ControlLabel>E-post adress:</ControlLabel>
                                <FormControl
                                    type="email"
                                    value={this.state.email}
                                    placeholder="epost@exempel.se"
                                    onChange={this.handleEmail}
                                />
                            </FormGroup>

                            <FormGroup
                                controlId="formBasicText"
                                validationState={this.validatePassword(this.state.password)}>
                                <ControlLabel>Lösenord:</ControlLabel>
                                <FormControl
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handlePassword}
                                />
                            </FormGroup>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle={this.state.buttonStyle} onClick={this.signin}>
                            Logga in
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
