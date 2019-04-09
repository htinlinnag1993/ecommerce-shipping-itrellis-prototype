// Dashboard is a component for the dashboard of the app that shows:
// - product list
// - change order date option

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductList from './products/ProductList';

// class-based component
class Dashboard extends Component {
  renderContent() {
    return (
      <div>
        <h3>Hello!</h3>
        <ProductList />
      </div>
    );
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        {this.renderContent()}
        <div className="fixed-action-btn">
          <Link to="/products/changeorderdate" className="btn-large red">
            Change Order Date
          </Link>
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return { auth: state.auth };
// }
function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps)(Dashboard);
