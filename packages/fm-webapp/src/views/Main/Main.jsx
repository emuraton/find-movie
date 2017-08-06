import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Header } from 'fm-components'
import SearchView from '../SearchView/SearchView'


export default () => {
  return (
    <Router>
      <div>
        <Route path="/" component={Header}/>
        <Route exact path="/" component={SearchView}/>
        <Route exact path="/movie" component={SearchView}/>
      </div>
    </Router>

  )
}
  
