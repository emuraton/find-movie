const movies = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ID_MOVIES':
      return {
        ...state,
        list: action.listMovies
      }
    default:
      return state
  }
}

export default movies
