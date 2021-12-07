import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './User.module.css';
const User = ({user,seed,index}) => {
    const {name,picture,location} = user;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/details`,{ state: {seed,index} });
    }
   
    return (
        <div className={styles.userContainer}>
            <img src={picture.large} alt='' className={styles.profileImage}/>
            <p>{name.title} {name.first} {name.last}</p>
            <p>From : {location.country}</p>
            <button className={styles.detailsButton}
            onClick={handleClick}
            >DETAILS</button>
        </div>
    );
};

export default User;