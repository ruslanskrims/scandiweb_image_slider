import React from "react";
import { Slider } from "../../components";
import styles from "./styles.module.scss";
import { images } from "../../assets/images";

export const Cascade = () => {
  return (
    <div className={styles.cascade}>
      <h1 className={styles.cascade__title}>Slider Carousel for Scandiweb</h1>
      <Slider>
        <img src={`${images[1]}`}></img>
        <img src={`${images[2]}`}></img>
        <img src={`${images[3]}`}></img>
        <img src={`${images[4]}`}></img>
        <h2>Slider For the Scandiweb</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          reiciendis placeat dicta velit doloribus. Sequi suscipit laboriosam
          adipisci hic nobis?
        </p>
        <h2>Another slide</h2>
        <div>One more slide...</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          reiciendis placeat dicta velit doloribus. Sequi suscipit laboriosam
          adipisci hic nobis?
        </p>
        <div>PRE-LAST SLIDE</div>
        <div>LAST SLIDE</div>
      </Slider>
    </div>
  );
};
