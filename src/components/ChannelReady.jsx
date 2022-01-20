import React from 'react';
import { useSelector } from 'react-redux';

const ChannelReady = () => {
    const movieSelected = useSelector((state) => state.movieSelected);

    return (
        <>
            <div className="channel--ready--container">
                <div className="channel__ready" style={{color: movieSelected?.id ? "green" : "red"}}>
                    Access to the chat room
                </div>
            </div>
            <br />
        </>
    );
};

export default ChannelReady;