import React from 'react';
import styles from './styles.module.scss';

export const ImageComponent = ({src, activeSlide, key}) => {
    return (
        <img className={styles.sliderImage} src={src} alt="Slider Image"></img>
    );
};