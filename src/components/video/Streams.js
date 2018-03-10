import React from 'react';
import axios from 'axios';

export default class Streams extends React.Component {
    constructor() {
        super();
        this.state = { has_streams: false, streams: null };
        this.fetchStreams();
    }

    fetchStreams = async () => {
        axios
            // replace width config file variable
            .get('https://www.ikoll.se/api/v1/orders')
            .then(response => {
                if (response.data) {
                    this.setState({ streams: response.data, has_streams: true });
                }
            })
            .catch(error => {
                console.log(error);
            });
        this.timer();
    };

    displayStreams() {
        return this.state.streams.map(stream => {
            console.log(stream);
            // stream.stream === not recording
            if (stream.isStreaming && stream.stream) {
                return <div key={stream._id}>Live!</div>;
            }
            return false;
        });
    }

    timer = async () => {
        setTimeout(() => {
            this.fetchStreams();
        }, 240000); // 4 Minutes
    };

    render() {
        if (this.state.has_streams || this.state.streams !== null) {
            return this.displayStreams();
        }
        return <div />;
    }
}
