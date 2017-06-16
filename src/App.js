import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/game">Play The Game</Link>
        <Link to="/about">Skip The Fluff</Link>
      </div>
    )
  }
}

export default App;
