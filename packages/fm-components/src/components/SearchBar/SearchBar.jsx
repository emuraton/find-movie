import React, { Component } from 'react'
import PropTypes from 'prop-types'

import searchImg from './images/search-icon.svg'
require('./SearchBar.css')

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { onSubmit } = this.props
    return (
      <div className="SearchBar">
        <form className="SearchBar-form" onSubmit={onSubmit}>
          <div className="SearchBar-iconParent">
            <button className="SearchBar-button" onClick={onSubmit}>
              <img className="SearchBar-icon" alt="Search" src={searchImg} />
            </button>
          </div>
          <input className="SearchBar-input" type="text" placeholder="Search for a movie, tv show, person..."/>
        </form>
      </div>
    )
  }
}

SearchBar.PropTypes = {
  onSubmit: PropTypes.func.isRequired
}
