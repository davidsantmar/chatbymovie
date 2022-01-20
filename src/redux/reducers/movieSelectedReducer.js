import movieSelectedActionTypes from "../actions/movieSelectedActionTypes";

function movieSelectedReducer(movie = {}, action) {
  switch (action.type) {
    case movieSelectedActionTypes.SELECT_MOVIE:
      return { title: action.movie.title, id: action.movie.id };

    default:
      return movie;
  }
}

export default movieSelectedReducer;
