import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      stonks: [],
      displayStonks: [],
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
          stonks: data,
          displayStonks: data
        })
      })
  }

  handleClick = (id) => {
    console.log("Ayyy stonks")
    this.setState({
      myStonks: [...this.state.myStonks, this.state.stonks.find(stonk => stonk.id === id)]
    })
  }

  handleType = (e) => {
    console.log(e.target.value)
    this.setState({
      displayStonks: this.state.stonks.filter(stonk => stonk.type === e.target.value)
    })

  }

  handleSort = (e) => {
    let sortType = e.target.value.toLowerCase()
    console.log(sortType)
    if (sortType === 'price') {
      this.setState({
        displayStonks: this.state.displayStonks.sort((a, b) => a.price - b.price)
      })
    } else {
      this.setState({
        displayStonks: this.state.displayStonks.sort((a,b) => a.name > b.name ? 1 : -1)
      })
    }
  }



  render() {
    return (
      <div>
        <Header />
        <MainContainer
          // stonks={this.state.type === null ? this.state.stonks : this.state.stonks.filter( stonk =>  stonk.type === this.state.type)}
          stonks={this.state.displayStonks}
          myStonks={this.state.myStonks}
          handleClick={this.handleClick}
          handleType={this.handleType}
          handleSort={this.handleSort}
        />
      </div>
    );
  }
}

export default App;
