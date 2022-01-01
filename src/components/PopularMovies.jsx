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

    //if (!firstMovie) return "loading...";


    return (
        
        <div className="popular--movies--container">
            <div>
                <div className="popular__movies" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w200${firstMovie.backdrop_path}`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                </div>
                <span>
                    {firstMovie.original_title}
                </span>
            </div>
            <div>
                <div className="popular__movies" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w200${secondMovie.backdrop_path}`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                </div>
                <span>
                    {secondMovie.original_title}
                </span>
            </div>
            <div>
                <div className="popular__movies" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w200${thirdMovie.backdrop_path}`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                </div>
                <span>
                    {thirdMovie.original_title}
                </span>
            </div>
            <div>
                <div className="popular__movies" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w200${fourthMovie.backdrop_path}`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                </div>
                <span>
                    {fourthMovie.original_title}
                </span>
            </div>
            <div>
                <div className="popular__movies" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w200${fifthMovie.backdrop_path}`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                </div>
                <span>
                    {fifthMovie.original_title}
                </span>
            </div>
        </div>
        
    );
};

export default PopularMovies;