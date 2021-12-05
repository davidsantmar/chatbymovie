import React from 'react';

const InputMovie = () => {
    return (
        <>
            <div className="input--movie--container">
                <input type="text" className="input__field" />
                <button type="button" className="join__button">Join movie channel!!</button>
            </div>
        </>
    );
};

export default InputMovie;