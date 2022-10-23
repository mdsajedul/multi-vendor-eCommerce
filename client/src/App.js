import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Cart from "./components/cart/Cart";
import CreateShop from "./components/dashboardComponents/CreateShop";
import MyProducts from "./components/dashboardComponents/MyProducts";
import MyShop from "./components/dashboardComponents/MyShop";
import Overview from "./components/dashboardComponents/Overview";
import ViewProductDetail from "./components/dashboardComponents/ViewProductDetail";
import All from "./components/myOrderComponents/All";
import ToPay from "./components/myOrderComponents/ToPay";
import ToReceive from "./components/myOrderComponents/ToReceive";
import ToShip from "./components/myOrderComponents/ToShip";
import ProductDetail from "./components/products/ProductDetail";
import Footer from "./components/shared/Footer";
import Navigation from "./components/shared/Navigation";
import useAuthCheck from "./hooks/useAuthCheck";
import BeSeller from "./pages/beSeller/BeSeller";
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
                <Route path="/beseller" element={<BeSeller/>}/>
                <Route path="/user" element={<PrivateRoute><User/></PrivateRoute>}>
                    <Route path="account" element={<ManageAccount/>} />
                    <Route path="dashboard" element={<Dashboard/>}>
                        <Route index  element={<Overview/>} />
                        <Route index path="overview" element={<Overview/>} />
                        <Route index path="createshop" element={<CreateShop/>} />
                        <Route path="myproducts" element={<MyProducts/>} />
                        <Route path="myshop" element={<MyShop/>} />
                        <Route path="myproducts/:id" element={<ViewProductDetail/>} />
                    </Route>
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
