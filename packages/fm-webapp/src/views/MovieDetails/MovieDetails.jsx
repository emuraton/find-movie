import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import request from 'superagent'
import env from '../../../env.json'

require('./MovieDetails.css')

export default class MovieDetails extends Component {
  constructor(props) {
    super(props)
    this.state = { movie: null }
  }

  //`TODO: Make it cleaner`
  componentWillMount(){
    const idMovie = this.props.location.search.split('=')[1]
    const { dispatch } = this.props
    Promise.all([
      request
        .get(`${env.API_URL}${env.ENDPOINT_MOVIE_DETAILS}/${idMovie}`)
        .query({ api_key: env.API_KEY }),
      request
        .get(`${env.API_URL}${env.ENDPOINT_MOVIE_DETAILS}/${idMovie}/credits`)
        .query({ api_key: env.API_KEY }),
      request
        .get(`${env.API_URL}${env.ENDPOINT_MOVIE_DETAILS}/${idMovie}/videos`)
        .query({ api_key: env.API_KEY })

    ]).then((res) => {
        const director =  res[1].body.crew ? res[1].body.crew.find((person) => person.job === 'Director') : null
        const trailer = res[2].body.results ? res[2].body.results.find((trailer) => trailer.type === 'Trailer') : null
        this.setState({
          cast: res[1].body.cast,
          director,
          movie: res[0].body,
          trailer
        })
      })
      .catch((e) => {
        // TODO Improve error management with a message error in the UI
        this.setState({ movie: null })
      })
  }

  render(){
    if(!this.state.movie) return null
    console.log(this.state.trailer)
    const { cast, director, movie, trailer } = this.state
    const genres = movie.genres.reduce((acc, genre, index) => {
      if(index === 0 )return `${acc} ${genre.name}`
      return `${acc} - ${genre.name}`
    }, '')

    return (
      <div>
        <section className="MovieDetails_movie">
          <div>
            <img
              className="MovieDetails-poster"
              src={`${env.IMG_URL}/w342/${movie.poster_path}`}
              alt="Movie poster"
              width="342"
              height="513"
            />
          </div>
          <div className="MovieDetails_infos">
            <h1>
              {movie.title}
            </h1>
            <p>Genre: {genres}</p>
            <p>Rating: {movie.vote_average}</p>
            {director ? <p>Director: {director.name}</p> : null}
            {trailer ?
              <iframe
                title="YouTube video player"
                type="text/html"
                width="540"
                height="340"
                src={`http://www.youtube.com/embed/${trailer.key}`}
                frameborder="0"
                allowFullScreen>
              </iframe>
              : null}
          </div>
        </section>
        <section>
          <ol className="MovieDetails-cast">
            { cast.length > 0 ? cast.map((person) => {
                if(!person.profile_path) return null
                return (
                  <li key={person.id} className="MovieDetails-card">
                    <img
                      src={`${env.IMG_URL}/w154/${person.profile_path}`}
                      alt="Movie poster"
                      width="154"
                      height="231"
                      />
                    <p className="MovieDetails-name">{person.name}</p>
                  </li>
                  )
              }) : null
            }
          </ol>
        </section>
      </div>
    )
  }
}

MovieDetails.PropTypes = {
  movies: PropTypes.object,
}
