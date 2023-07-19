import React, { useEffect , useState} from  "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import photo from './photo.jpg';
function Product (){
    const [produit, setProduit] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:8081/')
        .then(res => setProduit(res.data))
        .catch(err => console.log(err));
    },[])

    const handleDelete = async (id) =>{
        try{
            await axios.delete('http://localhost:8081/produit/'+id)
            window.location.reload()
        }catch(err) {
            console.log(err)
        }
    }
    return (
            <div className="tableau">
                <div className="lololo">
                <Link to="/create" className="btn btn-success">Ajouter+</Link>
                <Link to='/category' className="btn btn-success">Les catégories</Link>
                <Link to="/listeCommande" className="btn btn-danger">Voir la liste des commandes</Link>
                <Link to="/commmmmmmmmm" className="btn btn-danger">Voir la liste des avis</Link>
                <Link to="/" className="btn btn-danger">Se deconnecter</Link>
                </div>
                <table className="tableau">
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Produit</th>
                            <th>Prix</th>
                            <th>Stock</th>
                            <th>Action</th>
                       </tr>
                    </thead>
                    <tbody>
                        {
                            produit.map((data, i) => (
                                <tr key={i}>
                                     <td>
                                     <img src={photo} alt={data.Titre}/></td>
                                    <td>{data.Titre}</td>
                                    <td>{data.Prix}</td>
                                    <td>{data.Stock}</td>
                                    <td>
                                    {/* /${data.ID}` */}
                                        <Link to={`/admin1234/update/${data.ID}`} className="btn btn-primary">Modifier</Link>
                                        <button  className="btn btn-danger"  onClick={(e) =>handleDelete(data.ID)}>Supprimer</button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
    )
}
export default Product