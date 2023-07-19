import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateProduct from './CreateProduct';
import UpdateProduct from './UpdateProduct';
import Product from './Product';
import Home from './home';
import Admin from './admin';
import Comment from './avis';
import Categorie from './categorie';
import ProduitParCatego from './produitParCatego';
import ListeCommandes from './listeCommandes';
import CategorieClient from './categoClient';
import ProduitParCategoClient from './ProduitcateClient';
import ListeCommentaires from './avisAdmin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
             <Route path= '/' element={<Home />}></Route>
             <Route path='/admin1234' element={<Admin/>}></Route>
             <Route path='/listeCommande' element={<ListeCommandes/>}></Route>
             <Route path='/create' element= {<CreateProduct />}></Route>
             <Route path='/category' element= {<Categorie />}></Route>
             <Route path='/categorie/:nom' element= {<ProduitParCatego />}></Route>
             <Route path='/admin1234/update/:id' element = {<UpdateProduct/>}></Route>
             <Route path='/commentaire/:id' element = {<Comment/>}></Route>
             <Route path='/categoClient' element = {<CategorieClient/>}></Route>
             <Route path='/categorieProdClient/:nom' element = {<ProduitParCategoClient/>}></Route>
             <Route path='/hruezhfudyehjdizshd1223233' element={<Product/>}></Route>
             <Route path='/commmmmmmmmm' element={<ListeCommentaires/>}></Route>

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
