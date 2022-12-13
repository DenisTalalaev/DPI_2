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
            <h1 className='blac'>{props.info.full_name}</h1>
            <h4 className='blac'>({props.info.life_dates})</h4>
            <img className='blac' src={props.info.main_photo} alt="" className='avatar'/>
            <Timeline info={props.info.timeline}/>
            <Gallery className='blac' photos={props.info.gallery}/>
            <VideosList className='blac' videos={props.info.videos}/>
            <OwnMap className='blac' coordinates={props.info.coordinates}/>
        </div>
    );
};

export default Writer;