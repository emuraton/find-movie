import React, { Component } from 'react'
import PropTypes from 'prop-types'
import env from '../../../env.json'

require('./LayoutGrid.css')

export default class LayoutGrid extends Component {
  constructor(props) {
    super(props)
    this.grid = null
  }

  getChildElements = () => {
    const { data } = this.props
    return data.results.map((element) => {
      return (
        element.poster_path ?
          <div className="LayoutGrid-cell" key={element.id}>
            <a href="#">
              <img src={`${env.IMG_URL}/w300${element.poster_path}`} alt="Movie" />
            </a>
          </div> :
        null
      )
    })
  }

  render() {
    const { data } = this.props
    if (data.length === 0 || data.results === 0) return null
    return (
      <div className="LayoutGrid">
        {this.getChildElements()}
      </div>
    )
  }
}

LayoutGrid.PropTypes = {
  data: PropTypes.array.isRequired
}

LayoutGrid.defaultProps = {
  data: []
}
