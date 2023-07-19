import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';
import photo from './photo.jpg';
const ProduitParCatego = () => {
    const {nom} = useParams();
    const [nomProduit,setProduit] = useState([]);
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
    const handleDelete = async (id) =>{
      try{
          await axios.delete('http://localhost:8081/produit/'+id)
          window.location.reload()
      }catch(err) {
          console.log(err)
      }
  }
  return (
    <div className='aff'>{nomProduit.map((data) => (
        <>
         <div className='produit'>
            <img src={photo} alt={data.Titre}/>
            <h2>{data.Titre}</h2>
            <h4>{data.Prix}</h4>
            <button  className="btn btn-danger"  onClick={(e) =>handleDelete(data.ID)}>Supprimer</button>
         </div>
          </> 
     ))
 }
</div>
  )
}

export default ProduitParCatego