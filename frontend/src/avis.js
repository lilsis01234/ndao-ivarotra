import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
const Comment = () => {
    const {id}= useParams();
    // const navigate = useNavigate();
    const [commentaire, setCommentaire]= useState([]);
    const[nom,setNom]= useState('');
    const[prenom,setPrenom]= useState('');
    const[contenu,setContenu]= useState('');

    useEffect(()=>{
        axios.get('http://localhost:8081/commentaire/'+id)
        .then(res =>{
            //setPhoto(res.data[0].Photo)
            setCommentaire(res.data)
            // console.log(commentaire);

        })
        .catch(err=>console.log(err));
    })

    function handleComment(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/comment', {nom,prenom, contenu,id})
        .then(res => {
            console.log(res,nom,prenom,contenu,id);
            console.log('lasa');
        }).catch(err =>console.log(err));
    }
  return (
    <div>
         <div className='form'>
        <form onSubmit={handleComment}>
        Votre nom:<br></br><input type='text' onChange={(e)=>setNom(e.target.value)}></input><br></br>
        Votre prenom:<br></br> <input type='text' onChange={(e)=>setPrenom(e.target.value)}></input><br></br>
        Votre avis: <br></br><input type='text' onChange={(e)=>setContenu(e.target.value)} ></input><br></br>
        <button className='btn btn-success' type='submit' >Enregistrer</button><br></br>
        </form>
        </div>
        <h2>Avis sur le produit</h2>
        <br></br>
            <div className='block'>
            {commentaire.map((comment)=>(
            <div className='com'>
             <h4>{comment.nom} {comment.prenom} </h4>
             <h5>{comment.contenu}</h5>
            </div>
             ))}
            </div>
    </div>
  )
}

export default Comment