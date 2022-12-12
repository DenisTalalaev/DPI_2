import React from 'react';
import './Writer.css'
import "react-vertical-timeline-component/style.min.css"
import Timeline from "./Timeline/Timeline";
import Gallery from "./Gallery/Gallery";
import VideosList from "./Videos/VideosList";
import OwnMap from "./Map/Map";

const Writer = (props) => {

    return (
        <div className='wrapper'>
            <h1>{props.info.full_name}</h1>
            <h4>({props.info.life_dates})</h4>
            <img src={props.info.main_photo} alt="" className='avatar'/>
            <Timeline info={props.info.timeline}/>
            <Gallery photos={props.info.gallery}/>
            <VideosList videos={props.info.videos}/>
            <OwnMap coordinates={props.info.coordinates}/>
        </div>
    );
};

export default Writer;