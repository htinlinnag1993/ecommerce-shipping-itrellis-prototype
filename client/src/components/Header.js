// Header is a component for the header of the app that shows:
// - app name,
// - navbar with componentDidMount

import React, { Component } from 'react';

// class-based component
class Header extends Component {
  renderContent() {
    return [
      <li key="1"><a href="/">Products</a></li>
    ];
  }

  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="left brand-logo">
            iTrellis
          </a>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
