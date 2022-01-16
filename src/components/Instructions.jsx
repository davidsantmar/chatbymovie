import React from 'react';

const Instructions = () => {
    return (
        <div className="instructions--container">
                Type a movie title and you'll enter into the regarding channel.
                Keep in mind that:
                <ol className="instructions__and_rules">
                    <li>You need a Google account to login to th channels</li>
                    <li>You can't make spoiler for any movie (don't advance scenes or events!)</li>
                    <li>Be polite</li>
                    <li>You can report people who don't respect rules 1 or 2</li>
                    <li>You can like or dislike comments and movies</li>
                </ol>
            </div>
    );
};

export default Instructions;