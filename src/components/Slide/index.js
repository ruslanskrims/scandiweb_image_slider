import React from 'react';
import styles from './styles.module.scss';

export const Slide = ({width, height, color, children}) => {
    const styles1 = {
        width: width,
        height: height,
        backgroundColor: color ? color : "#a5f0a2"
    };
    return (
        <div style={styles1} className={styles.slide}  >
            {children}
        </div>
            
    );
};