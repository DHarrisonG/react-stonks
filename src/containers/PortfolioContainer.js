import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.myStonks.map(stonk => {
              return <Stock 
              key={stonk.id}
              id={stonk.id}
              name={stonk.name}
              price={stonk.price}
              />
            })
            
            
          }
      </div>
    );
  }

}

export default PortfolioContainer;
