import React, {useMemo} from 'react';
import {GoogleMap, MarkerF} from "@react-google-maps/api";
import './Map.css'
import {useTranslation} from "react-i18next";

const Map = (props) => {
    const {t} = useTranslation();
    const center = useMemo(() => ({lat: props.coordinates.latitude, lng: props.coordinates.longitude}), []);
    return (
        <div>
            <h1>{t('place_of_work')}</h1>
            <GoogleMap zoom={13} center={center} mapContainerClassName='container'>
                <MarkerF position={center} />
            </GoogleMap>
        </div>
    )
}

export default Map;