import movieSelectedActionTypes from "../actions/movieSelectedActionTypes";

function movieSelectedReducer(movies = [], action) {
  switch (action.type) {
    case movieSelectedActionTypes.SELECT_MOVIE:
      return [...movies, { title: action.movie.title, id: action.movie.id }];

    default:
      return movies;
  }
}

export default movieSelectedReducer;
