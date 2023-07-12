
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemdetailContainer from './components/itemDetailContainer/ItemdetailContainer';
import Acerca from './components/acerca/Acerca';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/productos" element={<ItemListContainer/>}/>
      <Route path="/productos/:categoriaId" element={<ItemListContainer/>}/>
      <Route path="/detail/:id" element={<ItemdetailContainer/>}/>
      <Route path="/acerca" element={<Acerca/>}/>
      </Routes>
      
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
