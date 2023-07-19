import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
const ListeCommandes = () => {
    const [commandes, setCommande] = useState([])
    // const[listeCom,setlisteCom] = useState({});
    useEffect(()=> {
        axios.get('http://localhost:8081/listeCom')
        .then(res => setCommande(res.data))
        .catch(err => console.log(err));
    },[])
    console.log(commandes[0]);
    // setlisteCom(commandes.commandes);
    const handleDelete = async (id) =>{
        try{
            await axios.delete('http://localhost:8081/listeCom/'+id)
            window.location.reload()
        }catch(err) {
            console.log(err)
        }
    }

  return (
    <div>
    <h1>Liste de commandes</h1>
    <div className="tableau">
                <table className="tableau">
                    <thead>
                        <tr className='como'>
                            <th>Nom du client</th>
                            <th>Commandes</th>
                            <th>Prix total</th>
                            <th>Contact du client</th>
                            <th>email du client</th>
                            <th>Adresse du client</th>
                            <th>Date de livraison</th>
                            <th>Mode de paiement</th>
                            <th>Moyen de récuperation</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody className='coma'>
                        {
                            commandes.map((commande) => (
                                <tr key={commande.id}>
                                    <td>{commande.nom}</td>
                                    <td>{commande.commandes}</td>
                                    <td>{commande.total}</td>
                                    <td>{commande.contact}</td>
                                    <td>{commande.email}</td>
                                    <td>{commande.adresse}</td>
                                    <td>{commande.date}</td>
                                    <td>{commande.modePaiement}</td>
                                    <td>{commande.moyenRecep}</td>
                                    <td>
                                        <button  className="btn btn-danger"  onClick={ e =>handleDelete(commande.id)}>Annulé/reçu</button>
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

export default ListeCommandes