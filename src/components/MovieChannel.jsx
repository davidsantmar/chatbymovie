import React, { useEffect, useState } from 'react';
import { login } from '../firebase/actions';
import Chat from './Chat';

const MovieChannel = () => {
  const [logged, setLogged] = useState('');
  useEffect (() => {
    login()
    .then(logged => setLogged(logged));
   }, []);

  return (
    <>
        {<Chat />}
    </>
  );
};

export default MovieChannel;