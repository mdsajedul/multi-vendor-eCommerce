import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Cart from "./components/cart/Cart";
import ProductDetail from "./components/products/ProductDetail";
import Footer from "./components/shared/Footer";
import Navigation from "./components/shared/Navigation";
import useAuthCheck from "./hooks/useAuthCheck";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import PrivateRoute from "./pages/login/PrivateRoute";
import PublicRoute from "./pages/login/PublicRoute";
import ManageAccount from "./pages/manageAccount/ManageAccount";

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
                <Route path="/cart" element={<Cart/>}/>
                {/* <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}>
                    <Route path="account" element={<ManageAccount/>} />
                </Route> */}
                <Route path="/user" element={<PrivateRoute><Dashboard/></PrivateRoute>}>
                    <Route path="account" element={<ManageAccount/>} />
                </Route>
                {/* <Route path="/account" element={<ManageAccount/>} /> */}
            </Routes>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
