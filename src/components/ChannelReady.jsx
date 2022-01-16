import React from 'react';
import { useSelector } from 'react-redux';

const ChannelButton = () => {
    const movieSelected = useSelector((state) => state.movieSelected);

    return (
        <div style={{color: movieSelected.length > 0 ? "green" : "red"}}>Enter to the chat room
        </div>
    );
};

export default ChannelButton;