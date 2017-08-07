import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import env from '../../../env.json'

require('./LayoutGrid.css')

export default class LayoutGrid extends Component {

  getChildElements = () => {
    const { data } = this.props
    return Object.values(data).map((element) => {
      return (
        element.poster_path ?
          <div className="LayoutGrid-cell" key={element.id}>
            <Link to={{ pathname: '/movie', search: `?id=${element.id}` }}>
              <img
                src={`${env.IMG_URL}/w185${element.poster_path}`}
                alt="Movie"
                width="182"
                height="271"
              />
            </Link>
          </div> :
        null
      )
    })
  }

  render() {
    if (!this.props.data) return null
    const { data } = this.props
    return (
      <div className="LayoutGrid">
        {this.getChildElements()}
      </div>
    )
  }
}

LayoutGrid.PropTypes = {
  data: PropTypes.array.isRequired,
}

LayoutGrid.defaultProps = {
  data: {}
}
