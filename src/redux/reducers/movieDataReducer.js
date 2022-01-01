import inputActionTypes from "../actions/inputActionTypes";

function movieDataReducer(movie = [], action) {
  switch (action.type) {
    case inputActionTypes.LOAD_MOVIE_DATA:
      return action.movie;

    default:
      return movie;
  }
}

export default movieDataReducer;