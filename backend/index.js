/*const  express = require('express');
const app = express();


    app.get('/', (req,res) => { res.send('Bonjour')})

    app.listen(3000, () => {
        console.log('Serveur lancé sur le port 3000');
    });
*/
const express  = require('express');
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"",
    database:"ecommerce"
})

app.get("/", (req,res)=> {
    const sql = "SELECT * FROM produit";
    db.query(sql, (err, data)=> {
        if(err) return app.json("Error");
        return res.json(data)
    })
})

app.post('/create', (req, res) => {
    const sql  = "INSERT INTO produit (`Titre`, `Description`,`Prix`,`Categorie`,`Stock`,`Photo`)VALUES(?)";
    const values = [
        req.body.titre,
        req.body.description,
        req.body.prix,
        req.body.categorie,
        req.body.stock,
        req.body.photo
    ]
    db.query(sql, [values], (err, data) => {
        if(err) return res.json("Error");
        return res.json (data);
    })
})

app.post('/loginadmin',(req,res)=>{
    var email = req.body.email;
    var mdp = req.body.mdp;
    const sql = "SELECT * FROM admin WHERE email =? AND mot_de_passe=?";
    db.query(sql,[email,mdp],(err,result)=>{
        if(err){
           throw err
        }
        if(result.length<=0){
            return res.status(401).json({message:'informations incorrectes'});
        }
        return res.json({message:'Bonjour,bravo'})
    })
})

app.get('/update/:id', (req, res) => {
    const sql ="SELECT * FROM produit Where ID=?";
    const id = req.params.id;
    db.query(sql,[id],(err,result)=>{
        if(err) return res.json({Error: err});
        return res.json(result);
    })
})

app.get('/commentaire/:id',(req,res)=>{
    const id = req.params.id;
    const sql="SELECT * FROM commentaire Where id_produit=?";
    db.query(sql,[id],(err,result)=>{
        if(err) return res.json({Error: err});
        return res.json(result);
    })
})

app.get('/commentaires',(req,res)=>{
    const sql = "SELECT * FROM commentaire";
    db.query(sql, (err, data)=> {
        if(err) return app.json("Error");
        return res.json(data);
    })
})

app.delete('/commentaires/:id', (req, res) => {
    const sql  = "DELETE FROM commentaire WHERE ID = ? ";
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if(err) return res.json("Error");
        return res.json (data);                    
    })
})
app.get('/categoriedepro/:categorie',(req,res)=>{
    const categorie = req.params.categorie;
    const sql="SELECT * FROM produit WHERE Categorie=?";
    db.query(sql,[categorie],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.post('/comment',(req,res)=>{
    const id = req.body.id;
    const nom =   req.body.nom;
    const prenom =   req.body.prenom;
    const contenu =   req.body.contenu;
    const sql = "INSERT INTO commentaire (`nom`,`prenom`,`contenu`,`id_produit`)VALUES(?,?,?,?)";
    db.query(sql,[nom,prenom,contenu,id],(err, data) => {
        if(err) return res.json(err);
        else{
        return res.json (data);
        }
    })})

    app.post('/commande',(req,res)=>{
        const nom = req.body.nom;
        const adresse =   req.body.adresse;
        const contact =   req.body.contact;
        const email =   req.body.email;
        const commande =   req.body.commande;
        const commandes = JSON.stringify(commande);
        const total =   req.body.total;
        const mode =   req.body.mode;
        const moyen =   req.body.moyen;
        const date =   req.body.date;

        const sql = "INSERT INTO commandes (`nom`,`adresse`,`contact`,`email`,`commandes`,`total`,`date`,`modePaiement`,`moyenRecep`)VALUES(?,?,?,?,?,?,?,?,?)";
        db.query(sql,[nom,adresse,contact,email,commandes,total,date,mode,moyen],(err, data) => {
            if(err) return res.json(err);
            else{
            return res.json (data);
            }
        })})

app.get('/categorie',(req,res)=>{
    const sql = "SELECT * FROM produit";
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data)
    })
})
app.put('/modifier/:id', (req, res)=>{
    const sql  = "UPDATE produit  SET `Photo` = ?, `Titre` = ? ,  `Description`= ?, `Prix` = ? , `Categorie` = ? ,`Stock` = ? where ID = ?";
    const values = [
        req.body.photo,
        req.body.titre,
        req.body.description,
        req.body.prix,
        req.body.categorie,
        req.body.stock
    ]
    const id = req.params.id;
    db.query(sql, [...values,id], (err, result) => {
        if(err) return res.json("Erreur");
        return res.json ({updated:true});
    })
})

app.delete('/produit/:id', (req, res) => {
    const sql  = "DELETE FROM produit WHERE ID = ? ";
  
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if(err) return res.json("Error");
        return res.json (data);                    
    })
})

app.delete('/listeCom/:id', (req, res) => {
    const sql  = "DELETE FROM commandes WHERE id = ? ";
  
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if(err) return res.json(err);
        return res.json (data);                    
    })
})

app.get('/listeCom',(req,res)=>{
    const sql = "SELECT * FROM commandes";
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.listen(8081, () =>{
    console.log("marche sur le port 8081")
})

// 