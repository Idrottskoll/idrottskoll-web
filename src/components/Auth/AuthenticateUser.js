import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import Sigin from './Signin';

export default class AuthenticateUser extends React.Component {
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
                    Logga in / Skapa konto
                </Button>

                <div
                    style={{ display: this.state.show ? 'block' : 'none' }}
                    className="static-modal"
                >
                    <Modal.Header>
                        <Modal.Title>Logga in / Skapa konto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <Sigin
                                handleEmail={this.handleEmail}
                                email={this.state.email}
                                password={this.state.password}
                                handlePassword={this.handlePassword}
                            />
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
