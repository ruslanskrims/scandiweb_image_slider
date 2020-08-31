import React, { useState, useRef, useEffect } from "react";
import "./style.css";
import { Slide } from "../";
export const Slider = ({ slides }) => {
  const slidesListJSX = slides.map((url, id) => (
    <Slide key={url} id={id} url={url} />
  ));
  const clamp = (value, lower, upper) => {
    if (value > upper) return upper;
    if (value < lower) return lower;
    return value;
  };

  const slider = useRef();
  const otherRef = useRef({
    hasMousePress: false,
    startXPosition: 0,
    transformAmount: 0,
    velocity: 0,
    requestAnimationId: 0,
  });
  const mouseDown = (event) => {
    otherRef.current.hasMousePress = true;
    otherRef.current.startXPosition =
      event.pageX - otherRef.current.transformAmount;
    cancelMomentumTracking();
  };
  const mouseLeave = () => {
    otherRef.current.hasMousePress = false;
  };
  const mouseUp = () => {
    otherRef.current.hasMousePress = false;
    beginMomentumTracking();
  };

  const mouseMove = (event) => {
    if (!otherRef.current.hasMousePress) return;
    const { pageX } = event;
    const distance = pageX - otherRef.current.startXPosition;
    const clampedDistance = clamp(
      distance,
      -slider.current.scrollWidth + slider.current.clientWidth,
      0
    );
    otherRef.current.velocity =
      otherRef.current.transformAmount - clampedDistance;
    otherRef.current.transformAmount = clampedDistance;
    slider.current.style.transform = `translate3d(${clampedDistance}px, 0px, 0px)`;
  };

  const beginMomentumTracking = () => {
    cancelMomentumTracking();
    otherRef.current.requestAnimationId = requestAnimationFrame(momentumLoop);
  };
  const cancelMomentumTracking = () => {
    cancelAnimationFrame(otherRef.current.requestAnimationId);
  };
  const momentumLoop = () => {
    const value = otherRef.current.transformAmount - otherRef.current.velocity;
    const clampedDistance = clamp(
      value,
      -slider.current.scrollWidth + slider.current.clientWidth,
      0
    );
    otherRef.current.transformAmount = clampedDistance;
    slider.current.style.transform = `translate3d(${clampedDistance}px, 0px, 0px)`;
    otherRef.current.velocity *= 0.9;

    if (Math.abs(otherRef.current.velocity) > 0.1) {
      otherRef.current.requestAnimationId = requestAnimationFrame(momentumLoop);
    }
  };

  useEffect(() => {
    const sliderCopy = slider.current;
    sliderCopy.addEventListener("mousedown", mouseDown);
    sliderCopy.addEventListener("mouseleave", mouseLeave);
    sliderCopy.addEventListener("mouseup", mouseUp);
    sliderCopy.addEventListener("mousemove", mouseMove);

    return () => {
      sliderCopy.removeEventListener("mousedown", mouseDown);
      sliderCopy.removeEventListener("mouseleave", mouseLeave);
      sliderCopy.removeEventListener("mouseup", mouseUp);
      sliderCopy.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <>
      <div className="main">
        <h1>Image slider</h1>
        <div className="cascade">
          <div className="container" ref={slider}>
            {slidesListJSX}
          </div>
        </div>
      </div>
    </>
  );
};
