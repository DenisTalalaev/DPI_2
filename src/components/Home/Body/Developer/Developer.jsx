import React from 'react';
import './Developer.css'

const Developer = (props) => {
    return (
        <div className='info'>
            <a href={props.info.github_link}><img src={props.info.profile_picture} alt=""/></a>
            <h3>{props.info.name}</h3>
        </div>
    );
};

export default Developer;