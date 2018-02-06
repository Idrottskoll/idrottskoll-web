import React from 'react';
import { Button } from 'react-bootstrap';

export default class SignoutButton extends React.Component {
    signOut = () => {
        localStorage.removeItem('token');
    };

    render() {
        return (
            <Button bsStyle="primary" onClick={this.signOut} className="logout">
                Logga ut
            </Button>
        );
    }
}
