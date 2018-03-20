import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import SigninModal from '../SigninModal';
import SignoutButton from '../SignoutButton';

export default class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = { token: localStorage.token ? true : false };
    }

    handelToken = async (bool = false) => {
        this.setState({ token: bool });
    };

    render() {
        return (
            <div className="video-container bm-40">
                {this.state.token ? (
                    <SignoutButton action={this.handelToken} />
                ) : (
                    <SigninModal action={this.handelToken} />
                )}
                <video src={require('../../videos/background.mov')} autoPlay loop />
                <div className="hero-module">
                    <div className="hero-content">
                        <div className="logotype">
                            <Image
                                className="usp-icon tm-20 bm-10"
                                src={require('../../images/icons/logotype.png')}
                            />
                        </div>
                        <br />
                        <h1 className="color-white">
                            Idrottskoll <br />
                            <span className="smaller-text">
                                för dig som vill utvecklas inom idrott
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
        );
    }
}
