import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

export default class Signin extends React.Component {
    /**
     * @param string email
     * @return string
     */
    validateEmail = email => {
        return email.length < 5 ? 'error' : 'success';
    };

    /**
     * @param string email
     */
    validatePassword = password => {
        return password.length < 3 ? 'error' : 'success';
    };

    render() {
        return (
            <div>
                <FormGroup
                    controlId="form-email"
                    validationState={this.validateEmail(this.props.email)}
                >
                    <ControlLabel>E-post adress:</ControlLabel>
                    <FormControl
                        type="email"
                        value={this.props.email}
                        placeholder="epost@exempel.se"
                        onChange={this.props.handleEmail}
                    />
                </FormGroup>

                <FormGroup
                    controlId="formBasicText"
                    validationState={this.validatePassword(this.props.password)}
                >
                    <ControlLabel>Lösenord:</ControlLabel>
                    <FormControl
                        type="password"
                        value={this.props.password}
                        onChange={this.props.handlePassword}
                    />
                </FormGroup>
            </div>
        );
    }
}
