import React from 'react';
import axios from 'axios';
// import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./App.css";
// import Product from './product';


const Admin=() => {
    const [email, setEmail] = useState('');
    const [mdp, setMdp]= useState('');
    const[message,setMessage]= useState('');
    const navigate = useNavigate();
    // const[con, setCon]= useState(false);



    // useEffect(()=>{
    //   const isLoggedIn = localStorage.getItem('isLoggedIn')
    //   if(isLoggedIn === 'true'){
    //     setCon(true);
    //     navigate('/adminamzay');
    //   }
    // },[navigate]);


   
    const handleLogin =(event)=>{
      event.preventDefault();
        axios.post('http://localhost:8081/loginadmin', {email,mdp})
        .then(res => {
          // localStorage.setItem('isLoggedin','true');
          navigate('/hruezhfudyehjdizshd1223233');
          // setCon(true);
          // navigate("/adminamzay");
          // console.log("efa navigué");
     })
     .catch(error=>{
      setMessage(error.response.data.message);
      console.log(message);
     });
    };



    // if(con){
    //   setTimeout(()=>{
    //   navigate('/adminamzay',);
    //   return null;})
    // }



   return (
    <>
      <div className='formadmin'>
        <center>
      <form>
    <em><h1 className='titreAdmin'>Veuillez entrer vos informations</h1></em>
       email: <br></br><input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input><br></br>
       mot de passe: <br></br><input type='password' value={mdp} name='mdp' onChange={(e)=>{setMdp(e.target.value)}}></input><br></br>
       <button type='submit' onClick={handleLogin} className='btn btn-success '>Se connecter</button>
       <h1>{message && <p>{message}</p>}</h1>
     </form>
     </center>
      </div>
    

    </>
  )
}

export default Admin;