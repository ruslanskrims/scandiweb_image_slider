import React, {useState, useRef} from 'react';
import styles from './styles.module.scss';
import {images} from '../../assets/images';
import { ImageComponent } from '../ImageComponent';

export const Slider = () => {
    const [x, setX] = useState(0);
    const [activeSlide, setActiveSlide] = useState(1);
    // const firstSlide = images[0];
    // const secondSlide = images[1];
    // const lastSlide = images[images.length - 1];
    // const [state,setState] = useState({
    //     _slides: [lastSlide, firstSlide, secondSlide]
    // });
    
   

    const showPrevSlide = () => {
        setActiveSlide(activeSlide - 1);
        console.log(activeSlide);
        if(x === 0  ? setX(-100 * (slides.length - 1)) : setX(x + 100));
    };

    const showNextSlide = () => {
        setX(x - 100);
        setActiveSlide(activeSlide + 1);
        console.log(activeSlide);
        if(x === -100 * (slides.length - 1) ? setX(0) : setX(x - 100));
    };

     const slides = images.map((content, id) => {
        return (
            <div className={styles.slide} key={id}
             onTransitionEnd={() => console.log(`fired!`)}
             style={{transform:`translate3d(${x}%, 0, 0)`}}
             >
                <ImageComponent src={content} activeSlide={activeSlide}></ImageComponent>
            </div>
        );
    });

    return (
        <div className={styles.slider}>
            {slides}
            <button id={styles.prevBtn} onClick={showPrevSlide}>Previous</button>
            <button id={styles.nextBtn} onClick={showNextSlide}>Next</button>
        </div>
    );
};