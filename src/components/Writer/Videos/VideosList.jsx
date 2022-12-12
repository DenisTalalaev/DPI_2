import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Video from "./Video/Video";
import styles from './VideoList.module.css'
import {useTranslation} from "react-i18next";

const VideosList = (props) => {
    const {t} = useTranslation();
    return (
        <div className={styles.Container_videos}>
            <div>
                <h1>{t('video')}</h1>
            </div>
            <div className={styles.videos}>
                {props.videos.map(link => <Video link={link}/>)}
            </div>
        </div>
    );
};

export default VideosList;