// Main component for the web app

// Next improving implementation would be integrating ChangeOrderDate component and related modules

// using es2015 syntax 'import' in react side of the app
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Dashboard from './Dashboard';
// import ChangeOrderDate from './products/ChangeOrderDate';

const ChangeOrderDate = () => <h2>ChangeOrderDate</h2>

// class-based component
class App extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/" component={Dashboard} />
            <Route path="/products/changeorderdate" component={ChangeOrderDate} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
