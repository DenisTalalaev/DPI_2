import React from 'react';
import './Writer.css'
import "react-vertical-timeline-component/style.min.css"
import Timeline from "./Timeline/Timeline";
import Gallery from "./Gallery/Gallery";
import VideosList from "./Videos/VideosList";
import Map from "./Map/Map";
import {useLoadScript} from "@react-google-maps/api"

const Writer = (props) => {
    const {isLoaded} = useLoadScript(
        {googleMapsApiKey: "AIzaSyAjWoYvnojTneG5630-xVLtpa0ernNo9DM"})
    if (!isLoaded)
        return <div>Loading...</div>
    return (
        <div className='wrapper'>
            <h1>{props.info.full_name}</h1>
            <h4>({props.info.life_dates})</h4>
            <img src={props.info.main_photo} alt="" className='avatar'/>
            <Timeline info={props.info.timeline}/>
            <Gallery photos={props.info.gallery}/>
            <VideosList videos={props.info.videos}/>
            <Map coordinates={props.info.coordinates}/>
        </div>
    );
};

export default Writer;