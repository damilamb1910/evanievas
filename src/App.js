import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home/Home';
import Footer from './components/footer/Footer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/productos" element={<ItemListContainer/>}/>
      </Routes>
      
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
