import React from 'react'
import PropTypes from 'prop-types'


export default class SearchBar extends Components {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form className="SearchBar-form" onSubmit={this.onSubmit}>
        <button className=""></button>
        <input>

        </input>
      </form>
    )
  }
}

SearchBar.PropTypes = {
  onSubmit: PropTypes.func.isRequired
}
