import React, { Component } from 'react'
import PropTypes from 'prop-types'

require('./SearchBar.css')

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { onSubmit } = this.props
    return (
      <form className="SearchBar-form" onSubmit={onSubmit}>
        <button className="SearchBar-button" onClick={onSubmit}>
          <image alt="Search" src="/assets/images/search-icon.svg"></image>
        </button>
        <input className="SearchBar-input" type="text" placeholder="Search..."/>
      </form>
    )
  }
}

SearchBar.PropTypes = {
  onSubmit: PropTypes.func.isRequired
}
