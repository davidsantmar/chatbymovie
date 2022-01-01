import inputActionTypes from "./inputActionTypes";
import axios from 'axios';

export function loadChannel(movieName){
    const API_BASE = `https://api.themoviedb.org/3/search/movie?api_key=4edc87782c375367d2a7b9637f00bfd3&query=${movieName}`;

    return async (dispatch) => {
        try {
          const { data } = await axios(`${API_BASE}`);
    
          dispatch({
            type: inputActionTypes.LOAD_MOVIE_DATA,
            movie: data,
          });
        } catch (error) {
          console.log(error.message);
        }
      };

}