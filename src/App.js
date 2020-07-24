import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {
  constructor(){
    super()
    this.state = {
      stonks: []
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



  render() {
    return (
      <div>
        <Header/>
        <MainContainer stonks={this.state.stonks}/>
      </div>
    );
  }
}

export default App;
