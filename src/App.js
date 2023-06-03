import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home/Home';
import Footer from './components/footer/Footer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemdetailContainer from './components/itemDetailContainer/ItemdetailContainer';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/productos/:categoriaId" element={<ItemListContainer/>}/>
      <Route path="/detail/:id" element={<ItemdetailContainer/>}/>
      </Routes>
      
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
