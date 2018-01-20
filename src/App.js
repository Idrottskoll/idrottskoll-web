import React, { Component } from 'react';
import './App.scss';
import ReactGA from 'react-ga';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            someData: null
        };

        ReactGA.initialize('UA-112717712-1');
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return (
            <div>
                <h1>Idrottskoll</h1>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        );
    }
}
