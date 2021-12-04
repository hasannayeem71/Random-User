import axios from 'axios';
import React, { useEffect } from 'react';
import PreLoader from '../PreLoader/PreLoader';
import User from '../User/User';
import styles from './Home.module.css';

const Home = () => {
    const [users,setUsers] = React.useState([]);
    const [seed,setSeed] = React.useState('');
    const [loading,setLoading] = React.useState(true);
    useEffect(()=>{
        document.title = 'home';
        axios.get(`https://randomuser.me/api/?results=10`).then(res=>{
            setUsers(res.data.results);
            setSeed(res.data.info.seed);
            setLoading(false);
           
        })
    },[])

    if(loading){
        return <PreLoader/>
    }else if(users.length===0){
        return <h1>No users found</h1>
    }
    return (
        <div className="App">
        <div className={styles.userContainer}>
            {
                users?.map((user,index)=><User key={index} index={index} user={user} seed={seed}/>)
            }
        </div></div>
    );
};

export default Home;