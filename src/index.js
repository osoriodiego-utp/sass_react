import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Navbar from './shared/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import GamesList from './pages/GamesList'
import GamePage from './pages/GamePage'

import 'semantic-ui-css/semantic.min.css'
import './index.sass'

function App () {
  return (
    <Router>
      <Navbar />
      <div className='main-container'>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/games' component={GamesList} />
        <Route exact path='/games/:id' component={GamePage} />
      </div>
    </Router>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
