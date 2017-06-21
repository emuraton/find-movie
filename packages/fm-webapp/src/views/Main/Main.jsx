import React, { Component } from 'react'
import { Header } from 'fm-components'
import SearchView from '../SearchView/SearchView'


export default class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header/>
        <SearchView/>
      </div>
    )
  }
}
