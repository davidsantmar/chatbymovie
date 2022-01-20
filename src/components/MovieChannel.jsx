import React, { useEffect, useState } from 'react';
import { login } from '../firebase/actions';
import Chat from './Chat';
import { useSelector } from 'react-redux';

const MovieChannel = () => {
  /*const [logged, setLogged] = useState('');
  useEffect (() => {
    login()
    .then(logged => setLogged(logged));
   }, []);*/
   const movieSelected = useSelector((state) => state.movieSelected);

  login();

  return (
    <>
        {<Chat />}
    </>
  );
};

export default MovieChannel;