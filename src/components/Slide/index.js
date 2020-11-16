import React from 'react';
import styles from './styles.module.scss';

export const Slide = ({ color, children}) => {
    const customStyle = {
        backgroundColor: color ? color : "#a5f0a2"
    };
    return (
        <div className={styles.slide}>
            {children}
        </div>
            
    );
};