import React from 'react';
import styles from './styles.module.scss';

export const Slide = ({ color, children}) => {
    const customStyle = {
        backgroundColor: color ? color : "#07d0f3"
    };
    return (
        <div className={styles.slide} style={customStyle}>
            {children}
        </div>
            
    );
};