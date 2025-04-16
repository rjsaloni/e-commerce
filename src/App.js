import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import OrderPage from './Pages/OrderPage/OrderPage';
import CartPage from './Pages/CartPage/CartPage';
import { CartProvider } from './context/CartContext';
import DeliveryPage from './Pages/DeliveryPage/DeliveryPage';

function App() {
  return (
    
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/Delivery" element={<DeliveryPage/>} /> 
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
