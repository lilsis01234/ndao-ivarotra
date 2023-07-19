import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import Footer from './footer'
import axios from 'axios';
import photo from './photo.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import logo from './logo_tantely.jpg';
import robe from './robe_fleur.jpg';
// import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [produit, setProduit] = useState([]);
    useEffect(()=> {
        axios.get('http://localhost:8081/')
        .then(res => setProduit(res.data))
        .catch(err => console.log(err));
    },[])
    const [commande,setCommande]=useState([]);
    var [total,setTotal]= useState(0);
    // const navigate = useNavigate;
    const [nom,setNom]= useState('');
    const [date,setDate]= useState('');
    const [mode,setMode]= useState('');
    const [moyen,setMoyen]= useState('');
    const[email,setEmail] = useState('');
    const[adresse,setAdresse] = useState('');
    const [contact, setContact] = useState('');
    
    var result;
    if(total===0||total<0){
         result = "Votre panier est triste,remplissez le";
    }
    else{
         result = "En bas de page pour emmener votre panier";
    }

const[recherche,setRecherche]=useState('rechercher ici');
if(recherche===''){
    setRecherche('rechercher ici');
}
const handleSubmit=(event)=>{
    event.preventDefault();
    axios.post('http://localhost:8081/commande',{nom,email,adresse,contact,commande,total,date,mode,moyen})
    .then(res => {
        console.log(res);
        console.log(nom,email,adresse,contact,commande,total,date,mode,moyen);
        alert('commande enregistré');
        setCommande([]);
        setTotal(0);
        setAdresse('');
        setContact('');
        setEmail('');
        setNom('');
        setDate('');
        setMode('');
        setMoyen('');

        // navigate('/');
    }).catch(err =>console.log(err));
}



function SlideCard(){
         const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay:true,
          appendDts: (dots) => {
            return <ul style = {{margin : "0px"}}>{dots}</ul>
          },

        };
    return(
        <>
         <Slider {...settings}>
           {produit.map((produit, index)=>{
            return(
                <section className="homeSlide contentWidth">
                <div className="box d_flex top" key={index}> 
                    <div className="left">
                        <h1>{produit.Titre}</h1>
                        <h2>{produit.Description}</h2>
                        <h3>{produit.Prix} ar TTC</h3>
                    </div>
                    <div className="right">
                        <img src={photo} alt="cc" />
                    </div>
                </div>
                </section>
            )
           })}
          </Slider>  
        
        </>
    )
}
  return (
    <>
        {/* <SlideCard/> */}
        <div className='panierito' id='panierito'>
         <div> 
           <h4> 🛒{result}</h4>
            {commande.map((com)=>(
            <>
            <h6>{com.nbr}  {com.nom}   {com.prix}</h6>
            <button onClick={()=>{com.nbr+=1;setTotal(total+=com.prix);}}>+</button>
            <button onClick={()=>{com.nbr-=1;setTotal(total-=com.prix);}}>-</button>
            </>
            ))}
            <h5>Total: {total}</h5>
            </div>
            <button className="btn btn-light" onClick={()=>{setCommande([]); setTotal(0)}}>Tout annuler</button>
        </div>
        
        <div className='tsyHeader'>
        {/* <img src={logo} alt='logo' className='logo'/> */}
        <h1>Bienvenue sur Shopee</h1>
        <input type='text' className='rec' placeholder='rechercher ici' onChange={(e)=>setRecherche(e.target.value)}/>
        <div className='right'>
        <h4> <Link to='/categoClient'>Catégories</Link></h4>
        <h4><Link to="/admin1234"><i className="fa fa-user"></i></Link></h4>
        </div>
    </div>
    <div className='aff'>
            {produit.filter(produit=>produit.Titre.includes(recherche)).map(data=>(
               <>
               <div className='produit'>
                  <img src={photo} alt={data.Titre}/>
                  <h2>{data.Titre}</h2>
                  <h4>{data.Prix}</h4>
                  <button className="panierbtn" onClick={()=>{setCommande(commande.concat([[{nom:data.Titre}],[{prix:data.Prix}],[{nbr:1}]]));
                  setTotal(total+=data.Prix);}}>🛒</button><br></br>
                  <button className="panierbtn" onClick={()=>{setCommande(commande.filter(com=>com.nom!==data.Titre));
                  setTotal(total-=(data.Prix*commande.nbr));}}> Annuler</button><br></br>
                  <Link to={`/commentaire/${data.ID}`}>Voir les avis sur le produit</Link>
               </div>
                </> 
            ))}
        </div>

        <SlideCard/>
        <div className='aff'>{produit.map((data, key) => (
                         <div className='produit' key={key}>
                            <img src={photo} alt={data.Titre}/>
                            <h2>{data.Titre}</h2>
                            <h4>{data.Prix}</h4>
                            <button className="panierbtn" onClick={()=>{setCommande(commande.concat([{nom:data.Titre,prix:data.Prix,nbr:1}]));
                            setTotal(total+=data.Prix);}}> 🛒</button><br></br>
                            <button className="panierbtn" onClick={()=>{setCommande(commande.filter(com=>com.nom!==data.Titre));
                            setTotal(total-=data.Prix);}}> Annuler</button><br></br>
                            <Link to={`/commentaire/${data.ID}`}>Voir les avis sur le produit</Link>
                         </div>
                     ))
                 }
        </div>
<img src={robe} alt='robe' className='photo'/>
<div className='formhome'>
<form className='form' onSubmit={handleSubmit}>
   <center> <h1>Entrer vos informations pour confirmer votre commande</h1></center>
    Votre nom : <br></br> <input type='text' onChange={(e)=>setNom(e.target.value)}/><br></br> 
    Votre email :<br></br>  <input type='email' onChange={(e)=>setEmail(e.target.value)}/><br></br> 
    Votre adresse :<br></br>  <input type='text' onChange={(e)=>setAdresse(e.target.value)}/><br></br> 
    Votre numéro : <br></br> <input type='text' onChange={(e)=>setContact(e.target.value)}/><br></br> 
    Mode de paiement : <br></br> <input type='text'placeholder='par carte/en éspèce/autre' onChange={(e)=>setMode(e.target.value)}/><br></br> 
    Moyen de réception : <br></br> <input type='text' placeholder='livraison/récuperation' onChange={(e)=>setMoyen(e.target.value)}/><br></br> 
    Date de récuperation : <br></br> <input type='date' placeholder='livraison/récuperation' onChange={(e)=>setDate(e.target.value)}/><br></br> 
    
    <button type='submit' className='btn btn-warning'>Confirmer</button><br></br>
</form>

<Footer/>
</div>

</>
)
}
export default Home