import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ProductDetail from "./components/products/ProductDetail";
import Footer from "./components/shared/Footer";
import Navigation from "./components/shared/Navigation";
import useAuthCheck from "./hooks/useAuthCheck";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import PublicRoute from "./pages/login/PublicRoute";

function App() {

  const authChecked = useAuthCheck()

  return !authChecked ? (<div>
    Checking Authentication...
  </div>) 
  :  
  (
    <div className="bg-slate-100">
        <Router>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<PublicRoute><Login/></PublicRoute>}/>
                <Route path="/product/:id" element={<ProductDetail/>}/>
            </Routes>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
