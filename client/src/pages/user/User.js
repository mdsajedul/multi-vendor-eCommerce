import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

export default function User(){
    const {user} = useSelector((state)=>state.auth)
    return(
        <div className="p-6 md:grid md:grid-cols-6 ">

            <div className="md:col-span-1">
                <span>Hello, {user?.name}</span>
                <nav className="my-3">
                {user?.role==="seller" && 
                <>
                    <Link className="block font-semibold py-1" to="/user/dashboard">Dashboard</Link>
                    <Link className="block font-semibold py-1" to="/user/dashboard">Order Received</Link>
                    <hr />
                </>
                }
                    <Link className="block font-semibold py-1" to="/user/account">Manage Account</Link>
                    
                    <Link className="block font-semibold py-1" to="/user/myorders">My Orders</Link>
                </nav>
            </div>

            <div className="md:col-span-5">
                <Outlet/>
            </div> 

        </div>
    )
}