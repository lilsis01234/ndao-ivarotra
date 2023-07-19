import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function CreateProduct() {
    const [photo, setPhoto] = useState('')
    const [titre, setTitre] = useState('')
    const [description, setDescription] = useState('')
    const [prix, setPrix] = useState('')
    const [categorie, setCategorie] = useState('')
    const [stock, setStock] = useState('')
    const navigate = useNavigate();
    
    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/create', {photo,titre, description,prix,categorie,stock})
        .then(res => {
            console.log(res);
            navigate('/hruezhfudyehjdizshd1223233');
        }).catch(err =>console.log(err));
    }
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit ={handleSubmit}>
                    <h2>New Product</h2>
                    <div className="addProductItem">
                        <label>Image</label>
                        <input type="file" id="file" onChange={e=> setPhoto(e.target.files[0])}/>
                    </div>
                    <div className="mb-2">
                        <label>Titre</label>
                        <input type="text" className="form-control" onChange= {e => setTitre(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label>Description</label>
                        <input type="text" className="form-control" onChange= {e => setDescription(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label>Prix</label>
                        <input type="number" className="form-control" onChange= {e => setPrix(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label>Categorie</label>
                        <input type="text" className="form-control" onChange= {e => setCategorie(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Stock</label>
                        <input type="text" value={stock} className="form-control" onChange= {e => setStock(e.target.value)}/>
                    </div>
                    <button className="btn btn-success">Ajouter ce produit</button>
                </form>
            </div>

        </div>
    )
}
export default CreateProduct;