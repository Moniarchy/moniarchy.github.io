import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Game from './components/Game'
import About from './components/About'
import CurrentProject from './components/CurrentProject'
import PastProjects from './components/PastProjects'
import Contact from './components/Contact'
import { HashRouter, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render((
  <HashRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/game" component={Game}/>
      <Route path="/about" component={About}/>
      <Route path="/currentproject" component={CurrentProject}/>
      <Route path="/pastProjects" component={PastProjects}/>
      <Route path="/contact" component={Contact}/>
    </div>
  </HashRouter>
),
document.getElementById( 'root' ))
registerServiceWorker()
