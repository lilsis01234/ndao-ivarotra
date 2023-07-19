import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const UpdateProduct=()=>{
    const {id}= useParams();
    const [photo,setPhoto]=useState('')
    const [titre, setTitre] = useState('')
    const [description, setDescription] = useState('')
    const [prix, setPrix] = useState('')
    const [categorie, setCategorie] = useState('')
    const [stock, setStock] = useState('')

    const [Titre, settitre] = useState('')
    const [Description, setdescription] = useState('')
    const [Prix, setprix] = useState('')
    const [Categorie, setcategorie] = useState('')
    const [Stock, setstock] = useState('')
    useEffect(()=>{
        axios.get('http://localhost:8081/update/'+id)
        .then(res =>{
            //setPhoto(res.data[0].Photo)
            settitre(res.data[0].Titre)
            setdescription(res.data[0].Description)
            setprix(res.data[0].Prix)
            setcategorie(res.data[0].Categorie)
            setstock(res.data[0].Stock)

        })
        .catch(err=>console.log(err));
    })
    const navigate = useNavigate();

    const handleSubmit =(e)=>{
    console.log(titre, photo, categorie, description, prix, stock);
    e.preventDefault();
    axios.put('http://localhost:8081/modifier/'+id,{photo, titre, description, prix, categorie, stock})
    .then(res =>{
    if(res.data.updated){
        navigate('/hruezhfudyehjdizshd1223233');
    }
    else{
        alert('modification non réussie');
    }
}
).catch(err=>console.log(err));
}

    return (
        <div>
        <h1>Modifier le produit</h1>

        {/* Photo<input type="file" name="photo" onChange={(e)=>setPhoto(e.target.value)}></input>
        Titre<input type="text" name="titre" placeholder={Titre} onChange={(e)=>setTitre(e.target.value)}/>
        Description<input type="text" name="titre" placeholder={Description} onChange={(e)=>setDescription(e.target.value)}/>
        Prix<input type="text" name="titre" placeholder={Prix} onChange={(e)=>setPrix(e.target.value)}/>
        Categorie<input type="text" name="titre" placeholder={Categorie} onChange={(e)=>setCategorie(e.target.value)}/>
        En stock<input type="text" name="titre" placeholder={Stock} onChange={(e)=>setStock(e.target.value)}/>
        <button type="submit"></button>
        </form> */}
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <form onSubmit ={handleSubmit}>
                    <div className="editProductItem">
                        <label>Image</label>
                        <input type="file" id="file" name="file" onChange={(e)=>{setPhoto(e.target.value)}}/>
                    </div>
                    <div className="mb-2">
                        <label>Titre</label>
                        <input type="text" className="form-control" name="titre" placeholder={Titre} onChange= {(e) => setTitre(e.target.value)}/> 
                    </div>
                    <div className="mb-2">
                        <label>Description</label>
                        <input type="text" className="form-control" placeholder={Description} onChange= {(e) => setDescription(e.target.value)}/> 
                    </div>
                    <div className="mb-2">
                        <label>Prix</label>
                        <input type="text" className="form-control" placeholder={Prix} onChange= {(e) => setPrix(e.target.value)}/> 
                    </div>
                    <div className="mb-2">
                        <label>Categorie</label>
                        <input type="text" className="form-control" placeholder={Categorie} onChange= {(e) => setCategorie(e.target.value)}/> 
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">En stock </label>    
                        <input type="text" className="form-control" placeholder={Stock} onChange= {(e) => setStock(e.target.value)}/> 
                    </div>
                    <button className="btn btn-success">Modifier ce produit</button>
                </form>
            </div>
            </div> 
            </div>
    )
} 
export default UpdateProduct;

