import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {
  constructor(){
    super()
    this.state = {
      stonks: [],
      myStonks: []
    }
  }
  componentDidMount = () => {
    this.fetchStonks()
  }

  fetchStonks = () => {
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        stonks: data
      })
    })
  }

  handleClick = (id) => {
    console.log("Ayyy stonks")
    this.setState({
      myStonks: [...this.state.myStonks, this.state.stonks.find( stonk => stonk.id === id ) ]
    })
    
    
  }



  render() {
    return (
      <div>
        <Header/>
        <MainContainer 
        stonks={this.state.stonks}
        myStonks={this.state.myStonks}
        handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
