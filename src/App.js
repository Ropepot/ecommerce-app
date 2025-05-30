
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shopcategory from './pages/Shopcategory';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart';
import Shop from './pages/Shop';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<Shopcategory category="men"/>}/>
        <Route path='/women' element={<Shopcategory category="women"/>}/> 
        <Route path='/kids' element={<Shopcategory category="kids"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
