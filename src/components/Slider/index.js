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
  const sliderRef = useRef({
    hasMousePressed: false,
    startXPosition: 0,
    transformAmount: 0,
    velocity: 0,
    requestAnimationId: 0,
  });
  const mouseDown = (event) => {
    sliderRef.current.hasMousePressed = true;
    sliderRef.current.startXPosition =
      event.pageX - sliderRef.current.transformAmount;
    cancelMomentumTracking();
  };
  const mouseLeave = () => {
    sliderRef.current.hasMousePressed = false;
  };
  const mouseUp = () => {
    sliderRef.current.hasMousePressed = false;
    beginMomentumTracking();
  };

  const mouseMove = (event) => {
    if (!sliderRef.current.hasMousePressed) return;
    const { pageX } = event;
    const distance = pageX - sliderRef.current.startXPosition;
    const clampedDistance = clamp(
      distance,
      -slider.current.scrollWidth + slider.current.clientWidth,
      0
    );
    sliderRef.current.velocity =
      sliderRef.current.transformAmount - clampedDistance;
    sliderRef.current.transformAmount = clampedDistance;
    slider.current.style.transform = `translate3d(${clampedDistance}px, 0px, 0px)`;
  };

  const beginMomentumTracking = () => {
    cancelMomentumTracking();
    sliderRef.current.requestAnimationId = requestAnimationFrame(momentumLoop);
  };
  const cancelMomentumTracking = () => {
    cancelAnimationFrame(sliderRef.current.requestAnimationId);
  };
  const momentumLoop = () => {
    const value =
      sliderRef.current.transformAmount - sliderRef.current.velocity;
    const clampedDistance = clamp(
      value,
      -slider.current.scrollWidth + slider.current.clientWidth,
      0
    );
    sliderRef.current.transformAmount = clampedDistance;
    slider.current.style.transform = `translate3d(${clampedDistance}px, 0px, 0px)`;
    sliderRef.current.velocity *= 0.9;

    if (Math.abs(sliderRef.current.velocity) > 0.1) {
      sliderRef.current.requestAnimationId = requestAnimationFrame(
        momentumLoop
      );
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
