import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Categorie = () => {
    const [produit,setProduit]= useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8081/categorie')
        .then(res => setProduit(res.data))
        .catch(err => console.log(err));
    },[])

  return (
    <div><h1>Les catégories</h1>
        <div className='block'>
        {produit.map((produits)=>(
            <div className='com'>
                <Link to={`/categorieProdClient/${produits.Categorie}`}><h4>{produits.Categorie}</h4></Link>
            </div>
        )
        )}
        </div>
    </div>
  )
}

export default Categorie