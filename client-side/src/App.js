
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import Footer from './Components/Shared/Footer/Footer';
import Navigation from './Components/Shared/Navigation/Navigation';

function App() {
  return (
    <div className>
        <BrowserRouter>
          <Navigation/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='login' element={<Login/>} />
            </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
