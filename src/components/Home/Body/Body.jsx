import React from 'react';
import './Body.css'
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Developer from "./Developer/Developer";

const Body = (props) => {
    const {t} = useTranslation();
    return (
        <div className='Container'>
            <div className='info-block'>
                Данный портал содержит информацию о писателях Беларуси.
                На основной странице размещена информация о деятеле дня и описание команды разработчиков портала.
                Также портал содержит персональную страницу каждого кинорежиссера.
                На каждой странице идет описание деятеля: биография, фотогалерея с его изображениями и изображениями его работ,
                видео на YouTube об деятеле, место его основной деятельности на карте.
            </div>
            <div className='info-block'>
                <h1>{t('figure_of_the_day')}</h1>
                <img src={props.mainPerson.main_photo} alt=""/>
                <div>{props.mainPerson.full_name}</div>
                <div>({props.mainPerson.life_dates})</div>
                <div>{props.mainPerson.short_information}</div>
                <NavLink to={props.mainPerson.url}>{t('more_info_button')}</NavLink>
            </div>
            <div className='developers-block'>
                <h1>{t('developers')}</h1>
                <div className='developers-list'>
                    {props.developers_info.map((developer) => <Developer info={developer}/>)}
                </div>
            </div>
        </div>
    );
};

export default Body;