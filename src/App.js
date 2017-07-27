import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="initial-navigation">
          <Link to="/game" className="game-link">Play The Game</Link>
          <Link to="/about" className="skip-link">Skip The Fluff</Link>
        </div>
      </div>
    )
  }
}

export default App;
