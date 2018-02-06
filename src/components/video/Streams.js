import React from 'react';
import axios from 'axios';

export default class Streams extends React.Component {
    constructor() {
        super();
    }

    fetchStreams = async () => {
        return false;
    };

    componentWillMount = async () => {
        const streams = await this.fetchStreams();
    };
    render() {
        return <div>Live</div>;
    }
}
