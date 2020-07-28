import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {
  constructor(){
    super()
    this.state = {
      stonks: [],
      myStonks: [],
      type: null
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

  handleType = (e) => {
    console.log(e.target.value)
    this.setState({
      type: e.target.value
    })

  }



  render() {
    return (
      <div>
        <Header/>
        <MainContainer 
        stonks={this.state.type === null ? this.state.stonks : this.state.stonks.filter( stonk =>  stonk.type === this.state.type)}
        myStonks={this.state.myStonks}
        handleClick={this.handleClick}
        handleType={this.handleType}
        />
      </div>
    );
  }
}

export default App;
