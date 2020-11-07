import React from 'react';
import { Slider, Slide } from '../../components';
import styles from './styles.module.scss';
import {images} from '../../assets/images';

export const Cascade = () => (
    <div className={styles.cascade}>
        <h1>Image Slider for Scandiweb</h1>
        <Slider width="600px" height="400px">
            <Slide width="600px" height="400px"  >
                <img src={`${images[0]}`}></img>
            </Slide>
            <Slide width="600px" height="400px" >
                <img src={`${images[1]}`}></img>
            </Slide>
            <Slide width="600px" height="400px" >
                <img src={`${images[2]}`}></img>
            </Slide>
            <Slide width="600px" height="400px" color="red">
                <h1>SLider For the Scandiweb</h1>
            </Slide>
            <Slide width="600px" height="400px">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci reiciendis placeat dicta velit doloribus. Sequi suscipit laboriosam adipisci hic nobis?
                </p>
            </Slide>
            <Slide width="600px" height="400px">
                <div>
               PRELAST SLIDE
                </div>
            </Slide>
            <Slide width="600px" height="400px">
                <div>
                LAST SLIDE
                </div>
            </Slide>
        </Slider>
    </div>
);