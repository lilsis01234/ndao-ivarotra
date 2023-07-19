import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
const ListeCommentaires = () => {
    const [commentaires, setCommentaires] = useState([])
    // const[listeCom,setlisteCom] = useState({});
    useEffect(()=> {
        axios.get('http://localhost:8081/commentaires')
        .then(res => setCommentaires(res.data))
        .catch(err => console.log(err));
    },[])
    // setlisteCom(commandes.commandes);
    const handleDelete = async (id) =>{
        try{
            await axios.delete('http://localhost:8081/commentaires/'+id)
            window.location.reload()
        }catch(err) {
            console.log(err)
        }
    }

  return (
    <div>
    <h1>Liste de commentaires</h1>
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nom du client</th>
                            <th>Prenom</th>
                            <th>Commentaire</th>
                       </tr>
                    </thead>
                    <tbody>
                        {
                            commentaires.map((comment, i) => (
                                <tr key={i}>
                                    <td>{comment.nom}</td>
                                    <td>{comment.prenom}</td>
                                    <td>{comment.contenu}</td>
                                    <td>
                                        <button  className="btn btn-danger"  onClick={ e =>handleDelete(comment.id)}>Supprimer</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default ListeCommentaires