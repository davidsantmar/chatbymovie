const API_POPULAR_MOVIES = 'https://api.themoviedb.org/3/movie/popular?api_key=4edc87782c375367d2a7b9637f00bfd3&language=en-US&page=1'

export async function GetPopularMovies() {
    const data = await fetch(`${API_POPULAR_MOVIES}`);
    const json = await data.json();
  
    return json.results;
}
