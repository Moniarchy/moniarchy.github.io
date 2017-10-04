import React, { Component } from 'react'
import './About.css'
import headshot from './LinkedInHeadshot.jpg'


class About extends Component {
  render() {
    return (
      <div className="About">
        <img src={headshot} className="headshot" alt="Monica/'s professional headshot.'"></img>
        <h1 className="hi"> Hi there! My name is Monica. I am a full-stack developer from Oakland. I speak Javascript (NodeJS, ExpressJS, ReactJS), I test my code (MochaJS, ChaiJS), and I know how to use a database (PostgreSQL, MongoDB).</h1>
        <a href="https://www.linkedin.com/in/monica-williams-25582a36/" className="linkedin">Connect with me on LinkedIn</a>
        <a href="https://github.com/Moniarchy" className="github">See my code</a>
        <a href="https://medium.com/@monicaestellawilliams" className="medium">Follow me on Medium</a>
        <a href="http://localhost:3000/#/game" className="start">Play the game</a>
      </div>
    )
  }
}

export default About
