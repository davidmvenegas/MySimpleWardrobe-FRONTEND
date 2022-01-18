import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import ShoppingPage from "./pages/ShoppingPage";
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/" element={<HomePage/>} />
          <Route path="/products/:category" element={<ShoppingPage/>} />
          <Route path="/products/:id" element={<ProductPage/>} />
          <Route path="/cart" element={<CartPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;