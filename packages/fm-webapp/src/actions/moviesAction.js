export const setMovies = movies => {
  if(!movies) return { type: 'SET_ID_MOVIES', listMovies: {} }

  const listMovies = movies.reduce((acc, movie) => {
    if(movie.id) {
      return {
        ...acc,
        [movie.id]: { ...movie }
      }
    }
    return acc
  }, {})

  return {
    type: 'SET_ID_MOVIES',
    listMovies
  }
}
