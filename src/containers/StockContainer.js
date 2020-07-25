import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stonks</h2>
        {
          this.props.stonks.map(stonk => {
            return <Stock
              key={stonk.id}
              id={stonk.id}
              name={stonk.name}
              price={stonk.price}
              handleClick={this.props.handleClick}
            />
          })
        }
      </div>
    );
  }

}

export default StockContainer;
