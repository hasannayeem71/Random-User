import axios from 'axios';
import React, { useEffect } from 'react';
import PreLoader from '../PreLoader/PreLoader';
import User from '../User/User';
import styles from './Home.module.css';

const Home = () => {
    const [users,setUsers] = React.useState([]);
    const [assending,setAssending] = React.useState(false);
    
    const [seed,setSeed] = React.useState('');
    const [loading,setLoading] = React.useState(true);
    useEffect(()=>{
        document.title = 'home';
        axios.get(`https://randomuser.me/api/?results=10`).then(res=>{
            setUsers(res.data.results);
            setSeed(res.data.info.seed);
            setLoading(false);
                // setUsers(res.data.results);  
        })
    },[]
    );

    console.log(users);
    const handleSort = (users)=>{
        users.sort(function(a, b) {
          var nameA = a.location.country.toUpperCase(); // ignore upper and lowercase
          var nameB = b.location.country.toUpperCase(); // ignore upper and lowercase
        
            if(!assending){
                setAssending(true);
                if (nameA < nameB) { 
                    return -1;
                  }
                  if (nameA > nameB) {  
                    return 1;
                  }
                  // names must be equal
                  return 0;
              
            }
            else{
                setAssending(false);
                if (nameA < nameB) { 
                    return 1;
                  }
                  if (nameA > nameB) {  
                    return -1;
                  }
                  // names must be equal

                  return 0;
            }
        });
        
     

        const newUser= [...users];
        setUsers(newUser);
       
            
    }


    if(loading){
        return <PreLoader/>
    }else if(users.length===0){
        return <h1>No users found</h1>
    }
    return (
        <div className="App">
             <button className={styles.sortButton} onClick={()=>handleSort(users )}>Sort by country</button>
        <div className={styles.userContainer}>
            {
                users.map((user,index)=><User key={index} index={index} user={user} seed={seed}/>)
            }
        </div>
        {/* button to sort by country */}
     
      </div>
       
    );
};

export default Home;