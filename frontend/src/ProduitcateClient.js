import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import photo from './photo.jpg';

const ProduitParCategoClient = () => {
    const [commande,setCommande]=useState([]);
    var [total,setTotal]= useState(0);
    const {nom} = useParams();
    const [nomProduit,setProduit] = useState([]);
    const [nomClient,setNom]= useState('');
    const[email,setEmail] = useState('');
    const[adresse,setAdresse] = useState('');
    const [contact, setContact] = useState('');
    var result;
    if(total===0){
         result = "Votre panier est triste";
    }
    else{
         result = "Enregistrer en bas";
    }
    // console.log(nom);
    useEffect(()=>{
        axios.get(`http://localhost:8081/categoriedepro/${nom}`)
        .then(res =>{
            //setPhoto(res.data[0].Photo)
            setProduit(res.data);
            console.log(nomProduit)
            // console.log(nom)
            // console.log(nomProduit.Titre);
            // console.log(commentaire);

        })
        .catch(err=>console.log(err));
    })

    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:8081/commande',{nomClient,email,adresse,contact,commande,total})
        .then(res => {
            console.log(res);
            console.log(nomClient,email,adresse,contact,commande,total);
            setCommande([]);
            setTotal(0);
            setAdresse('');
            setContact('');
            setEmail('');
            setNom('');
            // navigate('/');
        }).catch(err =>console.log(err));
    }

  return (
    <>
    <div className='panierito' id='panierito'>
         <div> 
           <h4> 🛒{result}</h4>
            {commande.map((com)=>(
            <>
            <h6>{com.nom} {com.prix}</h6>
            </>
            ))}
             <h5>Total: {total}</h5>
            </div>
            <button className="btn btn-light" onClick={()=>{setCommande([]); setTotal(0)}}>Tout annuler</button>
        </div>
    <div className='aff'>{nomProduit.map((data) => (
        <>
         <div className='produit'>
            <img src={photo} alt={data.Titre}/>
            <h2>{data.Titre}</h2>
            <h4>{data.Prix}</h4>
            <button className="panierbtn" onClick={()=>{setCommande(commande.concat([{nom:data.Titre,prix:data.Prix}]));
            setTotal(total+=data.Prix);}}> Au panier</button><br></br>
            <Link to={`/commentaire/${data.ID}`}>Voir les avis sur le produit</Link>
         </div>
          </> 
     ))
 }
</div>
<div className='formhome'>
<form className='form' onSubmit={handleSubmit}>
   <center> <h1>Entrer vos informations pour confirmer votre commande</h1></center>
    Votre nom : <br></br> <input type='text' onChange={(e)=>setNom(e.target.value)}/><br></br> 
    Votre email :<br></br>  <input type='email' onChange={(e)=>setEmail(e.target.value)}/><br></br> 
    Votre adresse :<br></br>  <input type='text' onChange={(e)=>setAdresse(e.target.value)}/><br></br> 
    Votre numéro : <br></br> <input type='text' onChange={(e)=>setContact(e.target.value)}/><br></br> 
    <button type='submit' className='btn btn-warning'>Confirmer</button>
</form>
</div>
</>
  )
}

export default ProduitParCategoClient