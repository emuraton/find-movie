import React, { Component } from 'react'
import PropTypes from 'prop-types'

import searchImg from './images/search-icon.svg'
require('./SearchBar.css')

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '' }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log('hey', this.state)
    this.props.onSubmit(this.state.name)
  }

  render() {
    return (
      <div className="SearchBar">
        <form className="SearchBar-form" onSubmit={this.onSubmit}>
          <div className="SearchBar-iconParent">
            <button className="SearchBar-button" onClick={this.onSubmit}>
              <img className="SearchBar-icon" alt="Search" src={searchImg} />
            </button>
          </div>
          <input
            className="SearchBar-input"
            type="text" name="name"
            placeholder="Search for a movie, tv show, person..."
            onChange={this.onChange}
          />
        </form>
      </div>
    )
  }
}

SearchBar.PropTypes = {
  onSubmit: PropTypes.func.isRequired
}
