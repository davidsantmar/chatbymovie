import movieSelectedActionTypes from "./movieSelectedActionTypes";

export function selectMovie(movie) {
  return {
    type: movieSelectedActionTypes.SELECT_MOVIE,
    movie,
  };
}
