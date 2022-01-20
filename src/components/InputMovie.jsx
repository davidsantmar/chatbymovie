import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { GetMoviesByName } from '../redux/actions/movieDataActionCreator';
import { selectMovie } from '../redux/actions/movieSelectedActionCreator';

const InputMovie = () => {
    const [movieTitle, setMovieTitle] = useState(""); 
    const [show, setShow] = useState(false);
    const movieFound = useSelector((state) => state.movies.results);
    const dispatch = useDispatch(); 
    const handleModalClose = (e) => {
        setShow(false);
    };
    const handleEnterPressed = (event) => {
        if(event.key === 'Enter'){
            handleClick();        
        }
    }
    function handleChannel(event) {
        setMovieTitle(event.target.value);
    }
    function handleClick(){         
        dispatch(GetMoviesByName(movieTitle));
        setShow(true);
    }
    function handleMovieSelected(movie) {
        dispatch(selectMovie(movie));
      }
    return (
        <>
            <div className="input--movie--container">
                <input type="text" className="input__field" onChange={handleChannel} value={movieTitle} 
                placeholder="Type the movie title" onKeyPress={handleEnterPressed} autoFocus />
                <button className="search__button" type="button" onClick={handleClick}>
                    Search!!
                </button>
            </div>
            
            <div hidden={!show}>
                <div className="modal--background" onClick={handleModalClose}>
                    <div>
                        <div className="modal--card" style={{height: "300px", overflowY: "auto"}}>
                            {movieFound?.length > 0 &&
                                movieFound.map((movie) => (
                                    <>
                                        <div className="modal__result">
                                            <div key={movie.id} className="popular__movie__title">
                                                
                                                {movie.title}
                                            </div>
                                            <div className="poster__movie__modal" 
                                            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w200${movie.backdrop_path}`}}>
                                            </div>
                                            <button className="modal__button" onClick={() => handleMovieSelected(movie)} type="button">
                                                Select the {movie.title} channel!
                                            </button>
                                        </div>
                                    </>
                                )                            
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </>
    );
};

export default InputMovie;