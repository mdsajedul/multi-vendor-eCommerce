import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Footer from "./components/shared/Footer";
import Navigation from "./components/shared/Navigation";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="bg-slate-100">
        <Router>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
