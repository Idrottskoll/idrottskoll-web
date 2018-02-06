import React from 'react';
import axios from 'axios';

export default class Streams extends React.Component {
    constructor() {
        super();
        this.state = { streams: false };
    }

    fetchStreams = () => {
        axios
            .get('https://www.ikoll.se/api/v1/orders')
            .then(response => {
                if (response.data) {
                    return this.setState({ streams: response.data });
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    displayStreams() {
        return this.state.streams.map(stream => {
            if (stream.record) {
                return false;
            }

            return <div key={stream._id}>Live nu: {stream.stream.club}!</div>;
        });
    }

    componentWillMount = async () => {
        this.fetchStreams();
    };

    render() {
        return this.state.streams !== false ? this.displayStreams() : null;
    }
}
