import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export default class SignoutButton extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    signOut = () => {
        localStorage.removeItem('token');
    };

    render() {
        return (
            <Button bsStyle="primary" onClick={this.signOut}>
                Logga ut
            </Button>
        );
    }
}
