import React, {Children, useState, useMemo, useRef} from 'react';
import { Slide } from '../Slide';
import styles from './styles.module.scss';

export const Slider = ({children, width, height}) => {
    //changed the architecrute of an app. I have decided set left:0 property for the first
    //slide in order to make infinite scroll possible
     const [x, setX] = useState(0);
     const [trans, setTrans] = useState(0.5);
     const [r, setR] = useState(0);
    const [activeSlide, setActiveSlide] = useState(1);
  
    const styles1 = {
            // some styles based on props 
            overlay: {
                width: width,
                height: height,
            },
        };

     const showPrevSlide = () => {
        setX(x + 600);
        setActiveSlide(activeSlide - 1);
        setTrans(0.5);
        if(activeSlide === 1){
            setX(-(children.length - 1)  * 600);
            setActiveSlide(children.length);
            setTrans(0);
        }
        console.log(children.length);
        //  if(x === 0  ? setX(-100 * (slides.length - 1)) : setX(x + 100));
    };

    const showNextSlide = () => {
        setX(x - 600);
        setActiveSlide(activeSlide + 1);
        setTrans(0.5);
        if(activeSlide > children.length - 1){
            setX(0);
            setActiveSlide(1);
            setTrans(0);
        }
        //  if(x === -100 * (slides.length - 1) ? setX(0) : setX(x - 100));
    };

     const slides = Children.map(children, (child, i) => {
         console.log(i);
        return (
            <div key={i}>
                {child}
            </div>
        );
    });

  

    return (
    <div className={styles.slider} style={styles1.overlay}>
    <div className={styles.slider_wrapper} style={{left: `${x}px`, transition: `${trans}s`}} 
    >
            {slides}
        </div>
        <button id={styles.prevBtn} onClick={showPrevSlide}>Previous</button>
        <button id={styles.nextBtn} onClick={showNextSlide}>Next</button>
     </div>
    );
};