import React, { Component } from 'react';
import request from 'superagent';
// var mock = require('superagent-mocker')(request);

import ProductList from './components/productList/ProductList';

import logo from './logo.svg';
import './App.css';

const prepareRequest = (method = 'post', url) => (
    request[method](url)
        .set('content-type', 'application/json')
);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            items: [],
            error: false,
        };
    }

    componentDidMount() {
        prepareRequest('get', 'http://localhost:8000/productList')
            .timeout(15000)
            .end((error, response) => {
                if (response && response.ok) {
                    this.setState({
                        items: response.body,
                        isLoading: false,
                        error: false,
                    });
                } else {
                    this.setState({
                        items: [],
                        isLoading: false,
                        error: 'Beim Laden ist leider ein Fehler aufgetreten',
                    });
                }
            });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Responsive Fashion Frontend</h2>
                </div>
                { this.state.isLoading
                    ? <div className="loading"><img src={logo} /></div>
                    : <ProductList items={ this.state.items } />
                }
                { !!this.state.error && <div className="error">{ this.state.error }</div> }
            </div>
        );
    }
}

export default App;
