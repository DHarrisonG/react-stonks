import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <header>
        <h1 className="text-center">Flatiron Stonk Exchange</h1>
        <img className="stonk-img" src="https://i.kym-cdn.com/entries/icons/mobile/000/029/959/Screen_Shot_2019-06-05_at_1.26.32_PM.jpg"/>
      </header>
    );
  }

}

export default Header;
