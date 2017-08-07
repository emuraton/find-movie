import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import request from 'superagent'
import { SearchBar, LayoutGrid } from 'fm-components'
import env from '../../../env.json'
import { setMovies } from '../../actions/moviesAction'

class SearchView extends Component {
  constructor(props) {
    super(props)
  }

  callSearch = (query) => {
    const { dispatch } = this.props
    request
      .get(`${env.API_URL}${env.ENDPOINT_SEARCH_MOVIE}`)
      .query({ api_key: env.API_KEY, query, page: 1 })
      .then(({ body }) => {
        dispatch(setMovies(body.results))
      })
      .catch((e) => {
        // TODO Improve error management with a message error in the UI
        dispatch(setMovies())
      })
  }

  render() {
    const { movies } = this.props
    return (
      <section className="SearchView">
        <SearchBar onSubmit={this.callSearch} />
        { movies ? <LayoutGrid data={movies} /> : null }
      </section>
    )
  }
}

SearchView.PropTypes = {
  movies: PropTypes.object,
}

export default connect(
  state => ({ movies: state.movies.list })
)(SearchView)
