import React, {useState} from 'react';
import './Gallery.css'
import CloseIcon from '@mui/icons-material/Close';
import {useTranslation} from "react-i18next";

const Gallery = (props) => {
    const {t} = useTranslation();
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return (
        <>
            <h1>{t('gallery')}</h1>
            <div className={model ? 'model open' : 'model'}>
                <img src={tempImgSrc} alt=""/>
                <CloseIcon onClick={() => setModel(false)}/>
            </div>
            <div className='gallery'>
                {props.photos.map(imgSrc => {
                    let width = '100%';
                    return (
                        <div className='pics' onClick={() => getImg(imgSrc)}>
                            <img src={imgSrc} alt="" style={{width: width}}/>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default Gallery;