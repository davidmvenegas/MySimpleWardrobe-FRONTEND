import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import ProductPage from "./pages/ProductPage";
import Product from './pages/Product'
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/products/:category" element={<ProductPage/>} />
          <Route path="/products/:id" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;