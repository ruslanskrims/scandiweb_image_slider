import React from 'react';
import { Slider, Slide } from '../../components';
import styles from './styles.module.scss';
import {images} from '../../assets/images';

export const Cascade = () => { 
    
    return (
    <div className={styles.cascade}>
        <h1>Image Slider for Scandiweb</h1>
        <Slider>
            <Slide>
                <img src={`${images[0]}`}></img>
            </Slide>
            <Slide >
                <img src={`${images[1]}`}></img>
            </Slide>
            <Slide  >
                <img src={`${images[2]}`}></img>
            </Slide>
            <Slide color="turquoise">
                <h2>Slider For the Scandiweb</h2>
            </Slide>
            <Slide >
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci reiciendis placeat dicta velit doloribus. Sequi suscipit laboriosam adipisci hic nobis?
                </p>
            </Slide>
            <Slide>
                <h2>Another slide</h2>
            </Slide>
            <Slide >
                <div>
                One more slide...
                </div>
            </Slide>
            <Slide >
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci reiciendis placeat dicta velit doloribus. Sequi suscipit laboriosam adipisci hic nobis?
                </p>
            </Slide>
            <Slide >
                <div>
               PRELAST SLIDE
                </div>
            </Slide>
            <Slide >
                <div>
                LAST SLIDE
                </div>
            </Slide>
        </Slider>
    </div>
);};