import React from 'react';
import { useSelector } from 'react-redux';

const InputMovie = () => {
    const [movie, setMovie] = useSelector();
    function handleChannel(){
        
    }
    return (
        <>
            <div className="input--movie--container">
                <input type="text" className="input__field" />
                <button type="button" className="join__button" onClick={() => handleChannel()}>Join movie channel!!</button>
            </div>
        </>
    );
};

export default InputMovie;