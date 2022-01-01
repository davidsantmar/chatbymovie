const API_BASE = 'https://api.themoviedb.org/3/search/movie?api_key=4edc87782c375367d2a7b9637f00bfd3&page=1';
const API_POPULAR_MOVIES = 'https://api.themoviedb.org/3/movie/popular?api_key=4edc87782c375367d2a7b9637f00bfd3&language=en-US&page=1'

export async function GetMovieData(movieName) {
    const data = await fetch(`${API_BASE}&query=${movieName}`);
    const json = await data.json();
  
    return json.results;
}

export async function GetPopularMovies() {
    const data = await fetch(`${API_POPULAR_MOVIES}`);
    const json = await data.json();
  
    return json.results;
}

export async function GetPosterPath(id){
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4edc87782c375367d2a7b9637f00bfd3`);
    const json = await data.json();
  
    return json;
}

export async function GetMovieTitle(id){
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4edc87782c375367d2a7b9637f00bfd3`);
    const json = await data.json();
  
    return json;
}