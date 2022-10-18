import { Link } from "react-router-dom";
import ManageAccount from "../manageAccount/ManageAccount";

export default function Dashboard (){
    return(
        <div className="p-6 md:grid md:grid-cols-6 ">

            <div className="md:col-span-1">
                <h1>Dashboard</h1>
                <nav>
                    <Link className="block " to="/user/account">Manage Account</Link>
                    <Link className="block " to="/user/account">Manage Account</Link>
                    <Link className="block " to="/user/account">Manage Account</Link>
                    <Link className="block " to="/user/account">Manage Account</Link>
                </nav>
            </div>

            <div className="md:col-span-5">
                <ManageAccount/>
            </div> 
        </div>
    )
}