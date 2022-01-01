import React from 'react';
import { useState, useEffect } from 'react';
import { GetMovieData } from '../services/GetData';


const InputMovie = () => {
    const [movieTitle, setMovieTitle] = useState(""); 
    const [show, setShow] = useState(false);
    const [movieFoundOne, setMovieFoundOne] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
         GetMovieData(movieTitle)
            .then(tempJson => setMovieFoundOne(tempJson));
        }
    , []);
    const handleModalClose = (e) => {
        setShow(false);
      };
    function handleChannel(event) {
        setMovieTitle(event.target.value);
        console.log(GetMovieData(movieTitle));
    }
    function handleClick(){         
        setShow(true);
        return GetMovieData(movieTitle);
    }
    function handleModalButton(){
        
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
                        <div className="modal-card">
                            {JSON.stringify(movieFoundOne)}
                            <button type="button">Join</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InputMovie;