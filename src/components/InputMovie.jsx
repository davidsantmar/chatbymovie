import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { GetMoviesByName } from '../redux/actions/movieDataActionCreator';
import { login, logout } from "../firebase/actions";
import { Link } from 'react-router-dom';

const InputMovie = () => {
    const [movieTitle, setMovieTitle] = useState(""); 
    const [show, setShow] = useState(false);
    const movieFound = useSelector((state) => state.movies.results);
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();  

    const handleModalClose = (e) => {
        setShow(false);
      };
    function handleChannel(event) {
        setMovieTitle(event.target.value);
    }
    function handleClick(){         
        dispatch(GetMoviesByName(movieTitle));
        setShow(true);
    }
    function handleLogin() {
      login().then((data) => setUser(data));
      <Link to="/Canal" exact component></Link>
    }
    function handleLogout() {
      setUser(null);
      logout();
    }
   
    return (
        <>
            <div className="input--movie--container">
                <input type="text" className="input__field" onChange={handleChannel} value={movieTitle} 
                placeholder="Type the movie title" />
                <button type="button" className="search__button" onClick={handleClick}>
                    Search!!
                </button>
            </div>
            <div className="input--movie--results">
            </div>
            <div hidden={!show}>
                <div className="modal-background" onClick={handleModalClose}>
                    <div>
                        <div className="modal-card" style={{height: "300px", overflowY: "auto"}}>
                            {movieFound?.length > 0 &&
                            movieFound.map((movie) => (
                                <>
                                    <div key={movie.id}>{movie.title}
                                    <div className="poster__movie__result" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w200${movie.backdrop_path}`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                                    </div>
                                    <button type="button" onClick={handleLogin}>
                                        Join the {movie.title} channel!
                                    </button>
                                    </div>

                                </>
                            ))}
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default InputMovie;