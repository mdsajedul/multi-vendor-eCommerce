
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import ProductDetail from './Components/Products/ProductDetail/ProductDetail';
import Footer from './Components/Shared/Footer/Footer';
import Navigation from './Components/Shared/Navigation/Navigation';

function App() {
  return (
    <div className>
        <BrowserRouter>
          <Navigation/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/home' element={<Home/>} />
                <Route path='login' element={<Login/>} />
                <Route path='home/productDetail/:productId' element={<ProductDetail/>} />
                <Route path='/productDetail/:productId' element={<ProductDetail/>} />
            </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
