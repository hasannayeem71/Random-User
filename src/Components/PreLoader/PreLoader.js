import React from 'react';
import styles from './PreLoader.module.css';
const PreLoader = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
        <div className={styles.ldsRipple}><div></div><div></div></div>
        </div>
    );
};

export default PreLoader;