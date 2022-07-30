import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Preloader
import Preloader from './components/layouts/Preloader'
// Pages
import Home from './components/pages/Home'
import About from './components/pages/About'
import Gallery from './components/pages/Gallery'
import Services from './components/pages/Services'
import Contact from './components/pages/Contact'

export default () => {
  return (
    <Router>
      <Preloader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  )
}
