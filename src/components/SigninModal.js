import React from 'react';
import { Modal, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import axios from 'axios';

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

        await axios
            .post('https://www.ikoll.se/api/v1/login', {
                email: this.state.email,
                password: this.state.password
            })
            .then(async response => {
                if (response.status === 200 && response.data.token) {
                    await localStorage.setItem('token', response.data.token);
                    await this.setState({ show: false });
                    await this.props.action(true);
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

    render() {
        return (
            <div>
                <Button
                    style={{ display: !this.state.show ? 'block' : 'none' }}
                    bsStyle="primary"
                    onClick={() => this.setState({ show: true })}
                    className="login"
                >
                    Logga in
                </Button>

                <div
                    style={{ display: this.state.show ? 'block' : 'none' }}
                    className="static-modal"
                >
                    <Modal.Header>
                        <Modal.Title>Logga in</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <FormGroup
                                controlId="form-email"
                                validationState={this.validateEmail(this.state.email)}
                            >
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
                                validationState={this.validatePassword(this.state.password)}
                            >
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
                        <Button onClick={() => this.setState({ show: false })}>Stäng</Button>
                        <Button bsStyle={this.state.buttonStyle} onClick={this.signin}>
                            Logga in
                        </Button>
                    </Modal.Footer>
                </div>
            </div>
        );
    }
}
