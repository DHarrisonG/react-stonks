import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar />

        <div className="row">
          <div className="col-8">

            <StockContainer
              stonks={this.props.stonks}
              handleClick={this.props.handleClick}
            />

          </div>
          <div className="col-4">

            <PortfolioContainer
              myStonks={this.props.myStonks}
            />

          </div>
        </div>
      </div>
    );
  }

}

export default MainContainer;
