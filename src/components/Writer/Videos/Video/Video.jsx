import React from 'react';

const Video = (props) => {
    return (
        <div className="ratio ratio-16x9">
            <iframe src={props.link} title="YouTube video" allowFullScreen> </iframe>
        </div>
    );
};

export default Video;