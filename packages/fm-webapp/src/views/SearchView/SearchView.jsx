import React, { Component } from 'react'
import request from 'superagent'
import { SearchBar, LayoutGrid } from 'fm-components'
import env from '../../../env.json'

export default class SearchView extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [] }
  }

  callSearch = (query) => {
    request
      .get(`${env.API_URL}${env.ENDPOINT_SEARCH_MOVIE}`)
      .query({ api_key: env.API_KEY, query, page: 1 })
      .then(({ body }) => {
        this.setState({ data: body })
      })
      .catch(() => {
        // TODO Improve error management with a message error in the UI
        this.setState({ data: [] })
      })
  }

  render() {
    return (
      <section className="SearchView">
        <SearchBar onSubmit={this.callSearch} />
        <LayoutGrid data={this.state.data} />
      </section>
    )
  }
}
