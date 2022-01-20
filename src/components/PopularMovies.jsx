import React, { useEffect, useState } from 'react';
import { GetPopularMovies } from '../services/GetData';

const PopularMovies = () => {
    const [firstMovie, setFirstMovie] = useState([]);
    const [secondMovie, setSecondMovie] = useState([]);
    const [thirdMovie, setThirdMovie] = useState([]);
    const [fourthMovie, setFourthMovie] = useState([]);
    const [fifthMovie, setFifthMovie] = useState([]);

    useEffect(() => {
        GetPopularMovies()
            .then(tempJson => setFirstMovie(tempJson[0]));
    }, []); 
    useEffect(() => {
        GetPopularMovies()
            .then(tempJson => setSecondMovie(tempJson[1]));
    }, []); 
    useEffect(() => {
        GetPopularMovies()
            .then(tempJson => setThirdMovie(tempJson[2]));
    }, []); 
    useEffect(() => {
        GetPopularMovies()
            .then(tempJson => setFourthMovie(tempJson[3]));
    }, []); 
    useEffect(() => {
        GetPopularMovies()
            .then(tempJson => setFifthMovie(tempJson[4]));
    }, []); 
    return (
    <>
        <div className="popular--movies--section">
            <div className="popular__movies__title">
                    <h3>Popular Movies</h3>
            </div>

            <div className="popular--movies--container">
                <div className="popular__movie__card">
                    <div className="popular__movie__image" 
                    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w200${firstMovie.backdrop_path}`}}>
                    </div>
                    <div className="popular__movie__title">
                            {firstMovie.original_title}
                    </div>
                </div>
                <div className="popular__movie__card">
                    <div className="popular__movie__image" 
                    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w200${secondMovie.backdrop_path}`}}>
                    </div>
                    <div className="popular__movie__title">
                            {secondMovie.original_title}
                    </div>
                </div>
                <div className="popular__movie__card">
                    <div className="popular__movie__image" 
                    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w200${thirdMovie.backdrop_path}`}}>
                    </div>
                    <div className="popular__movie__title">
                            {thirdMovie.original_title}
                    </div>
                </div>
                <div className="popular__movie__card">
                    <div className="popular__movie__image" 
                    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w200${fourthMovie.backdrop_path}`}}>
                    </div>
                    <div className="popular__movie__title">
                            {fourthMovie.original_title}
                    </div>
                </div>
                <div className="popular__movie__card">
                    <div className="popular__movie__image" 
                    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w200${fifthMovie.backdrop_path}`}}>
                    </div>
                    <div className="popular__movie__title">
                            {fifthMovie.original_title}
                    </div>
                </div>
            </div>
        </div>
        <br />
    </>
    );
};

export default PopularMovies;