import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="app-name">Barkster</h1>
        <span>Find other dogs to play with</span>
      </header>
    );
  }
}

export default Header;
