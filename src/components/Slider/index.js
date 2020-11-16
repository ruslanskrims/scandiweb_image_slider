import React, {Children, useState} from 'react';
import styles from './styles.module.scss';
import prevSlideArrow from '../../assets/images/left-arrow.svg';
import nextSlideArrow from '../../assets/images/right-arrow.svg';

export const Slider = ({children}) => {
    const [x, setX] = useState(0);
    const [trans, setTrans] = useState(3);
    const [activeSlide, setActiveSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const showPrevSlide = () => {
        setActiveSlide(activeSlide - 1);
        setTrans(0.7);
        if(activeSlide === 0){
            setActiveSlide(children.length - 1);
            setTrans(0);
        }
        const value = x === 0  ? (-100 * (children.length - 1)) : (x + 100);
        setX(value);
    };

    const showNextSlide = () => {
        setActiveSlide(activeSlide + 1);
        setTrans(0.7);
        if(activeSlide >= children.length - 1){
            setActiveSlide(0);
            setTrans(0);
        }
         const value = x === (-100 * (children.length - 1)) ? 0 : (x - 100);
         setX(value);
    };

    const getSlideByDot = (index) => {
        setTrans(1.2);
        setActiveSlide(index);
        const value = -100 * index;
        setX(value);
    };

    const slides = Children.map(children, (child, i) => {
        return child;
    });

    const dots = children && children.map((__, index) => (
        <div onClick={() => getSlideByDot(index)} key={index} className={index === activeSlide ? styles.slider_dot_active : ""}></div>
    ));

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
}

    const handleTouchEnd = ()  => {
        if (touchStart - touchEnd > 30) {
            showNextSlide();
        }
        if (touchStart - touchEnd < -30) {
            showPrevSlide();
    }
}

const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
}

const handleMouseDown = (e) => {
    setTouchStart(e.screenX);
}

const handleMouseMove = (e) => {
    setTouchEnd(e.screenX);
}

const handleMouseUp = (e) => {
  if(touchStart > e.screenX) {
    showNextSlide();
  } else {
    showPrevSlide();
  }
};

return (
    <div className={styles.slider} >
        <div
        onMouseDown={e=> handleMouseDown(e)}
        onMouseUp={e => handleMouseUp(e)}
        onMouseMove={e => handleMouseMove(e)}
        onTouchStart={e => handleTouchStart(e)}
        onTouchMove={e => handleTouchMove(e)}
        onTouchEnd={() => handleTouchEnd()}
        className={styles.slider_wrapper} style={{  transition: `${trans}s`, transform:`translate3d(${x}%, 0, 0)`}} 
        >
            {slides}
        </div>
        <div className={styles.slider_dots}>
            {dots}
        </div>
        <div id={styles.prevBtn} onClick={showPrevSlide}>
            <img src={prevSlideArrow}/>
        </div>
        <div id={styles.nextBtn} onClick={showNextSlide}>
            <img src={nextSlideArrow} />
        </div>
     </div>
    );
};