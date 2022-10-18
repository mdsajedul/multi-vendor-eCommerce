import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Cart from "./components/cart/Cart";
import All from "./components/myOrderComponents/All";
import ToPay from "./components/myOrderComponents/ToPay";
import ToReceive from "./components/myOrderComponents/ToReceive";
import ToShip from "./components/myOrderComponents/ToShip";
import ProductDetail from "./components/products/ProductDetail";
import Footer from "./components/shared/Footer";
import Navigation from "./components/shared/Navigation";
import useAuthCheck from "./hooks/useAuthCheck";
import Dashboard from "./pages/dashboard/Dashboard"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import PrivateRoute from "./pages/login/PrivateRoute";
import PublicRoute from "./pages/login/PublicRoute";
import ManageAccount from "./pages/manageAccount/ManageAccount";
import MyOrders from "./pages/myOrders/MyOrders";
import User from "./pages/user/User";

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
                <Route path="/user" element={<PrivateRoute><User/></PrivateRoute>}>
                    <Route path="account" element={<ManageAccount/>} />
                    <Route path="dashboard" element={<Dashboard/>} />
                    <Route path="myorders" element={<MyOrders/>}>
                        <Route path="all" element={<All/>} />
                        <Route index element={<All/>} />
                        <Route path="topay" element={<ToPay/>} />
                        <Route path="toship" element={<ToShip/>} />
                        <Route path="toreceive" element={<ToReceive/>} />
                    </Route>
                </Route>
            </Routes>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
