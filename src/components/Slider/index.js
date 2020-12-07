import React, { Children, useState, useRef } from "react";
import styles from "./styles.module.scss";
import prevSlideArrow from "../../assets/images/left-arrow.svg";
import nextSlideArrow from "../../assets/images/right-arrow.svg";
import { Slide } from "../Slide";

export const Slider = ({ children }) => {
  const sliderRef = useRef();
  const [x, setX] = useState(0);
  const [trans, setTrans] = useState(0.5);
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const showPrevSlide = () => {
    setActiveSlide(activeSlide - 1);
    setTrans(0.7);
    if (activeSlide === 0) {
      setActiveSlide(children.length - 1);
      setTrans(0);
    }
    const value = x === 0 ? -100 * (children.length - 1) : x + 100;
    setX(value);
  };

  const showNextSlide = () => {
    setActiveSlide(activeSlide + 1);
    setTrans(0.7);
    if (activeSlide >= children.length - 1) {
      setActiveSlide(0);
      setTrans(0);
    }
    const value = x === -100 * (children.length - 1) ? 0 : x - 100;
    setX(value);
  };

  const getSlideByDot = (index) => {
    setTrans(1.2);
    setActiveSlide(index);
    const value = -100 * index;
    setX(value);
  };

  const dots =
    children &&
    children.map((__, index) => (
      <div
        onClick={() => getSlideByDot(index)}
        key={index}
        className={index === activeSlide ? styles.slider_dot_active : ""}
      ></div>
    ));

  const handleTouchStart = (e) => {
    const initPosition = e.screenX || e.targetTouches[0].clientX;
    sliderRef.current.style["cursor"] = "grabbing";
    setTouchStart(initPosition);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 19) {
      showNextSlide();
    }
    if (touchStart - touchEnd < -10) {
      showPrevSlide();
    }
  };

  const handleTouchMove = (e) => {
    const initPosition = e.screenX || e.targetTouches[0].clientX;
    setTouchEnd(initPosition);
  };

  const slides = children ? (
    <>
      <div
        onMouseDown={(e) => handleTouchStart(e)}
        onMouseMove={(e) => handleTouchMove(e)}
        onMouseUp={() => handleTouchEnd()}
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchMove={(e) => handleTouchMove(e)}
        onTouchEnd={() => handleTouchEnd()}
        onDragStart={(e) => e.preventDefault()}
        ref={sliderRef}
        className={styles.slider_wrapper}
        style={{ transition: `${trans}s`, transform: `translateX(${x}%)` }}
      >
        {Children.map(children, (child, __) => (
          <Slide color={"#c8edfc"}>{child}</Slide>
        ))}
      </div>
      <div className={styles.slider_dots}>{dots}</div>
      <div className={styles.prevBtn} onClick={showPrevSlide}>
        <img src={prevSlideArrow} />
      </div>
      <div className={styles.nextBtn} onClick={showNextSlide}>
        <img src={nextSlideArrow} />
      </div>
    </>
  ) : (
    <h1>There is no slides to show! No children found in Slider component</h1>
  );

  return <div className={styles.slider}>{slides}</div>;
};
