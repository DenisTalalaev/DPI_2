import React from 'react';
import './Card.css'
import {NavLink} from "react-router-dom";

function Card(props) {
    return(
        <div className='filmmaker'>
            <NavLink to={props.writer.url}><img alt="" src={props.writer.main_photo}/></NavLink>
            <h2>{props.writer.full_name}</h2>
        </div>
    );
}

export default Card;