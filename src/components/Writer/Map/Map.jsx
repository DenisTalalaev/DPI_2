import React from 'react';

import './Map.css'
import {useTranslation} from "react-i18next";
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";

const OwnMap = (props) => {

    const {t} = useTranslation();
    const defaultState = {
        center: [props.coordinates.latitude, props.coordinates.longitude],
        zoom: 7,
        controls: ['zoomControl'],
    };

    const yandexModules = ['control.ZoomControl'];

    return (
        <div>
            <h1>{t('place_of_work')}</h1>
            <YMaps>
                <Map defaultState={defaultState} modules={yandexModules} width="100%" height="60vh">
                    <Placemark
                        geometry={[props.coordinates.latitude, props.coordinates.longitude]}/>
                </Map>
            </YMaps>
        </div>
    )
}

export default OwnMap;