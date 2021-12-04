import axios from 'axios';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import PreLoader from '../PreLoader/PreLoader';
import styles from './Details.module.css';

const Details = () => {
    
    const {state} = useLocation();
    const { seed,index } = state;
    
    const [details, setDetails] = React.useState({})
    const [loading, setLoading] = React.useState(true)

    useEffect(()=>{
        document.title = `Details`;
                axios.get(`https://randomuser.me/api/?seed=${seed}&&results=10`).then(res=>{
                         setDetails(res.data.results[index])
                            setLoading(false)
                        })
             },[seed,index]
             
        );

    if(loading){
        return <PreLoader/>
    }
    
    //back user to home page
    const handleBack = () => {
        window.history.back();
    }
    

    return (
    
    <div className={styles.main} >
        <div className={styles.userContainer}>
            <div className={styles.user}>
            <img className={styles.userImg} src={details?.picture?.large} alt=''/>
            <h3>{details?.name?.title} {details?.name?.first} {details?.name?.last}</h3>
            </div>
            <div>
                <p>{details?.dob?.age} Years Old </p>
                <p>Sex : {details?.gender}</p>
                <p>Email : {details?.email} </p>
                <p>Phone Number : {details?.phone}</p>
                <adress>
                    <h4>Adress-</h4>
                    <p>
                        street name : {details?.location?.street?.name}
                    <br/>
                       street number : {details?.location?.street?.number} 
                   
                    <br/>
                        Country : {details?.location?.country}
                    <br/>
                        state : {details?.location?.state}
                    <br/>
                        post code : {details?.location?.postcode}
                    </p>
                </adress>
                <small>Register {details?.registered?.age} years ago</small>

       
            </div>
            <button className={styles.backButton} onClick={handleBack}>BACK TO HOME</button>
        </div>
        </div>
   
    );
};

export default Details;