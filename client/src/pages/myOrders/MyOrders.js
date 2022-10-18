import { useState } from "react";
import { Link ,Outlet} from "react-router-dom";

export default function MyOrders(){
    const [allBtnColor,setAllBtnColor] = useState('bg-white')
    const [payBtnColor,setPayBtnColor] = useState('')
    const [shipBtnColor,setShipBtnColor] = useState('')
    const [receiveBtnColor,setReceiveBtnColor] = useState('')

    const handleColorChange=(value)=>{
        if(value==="all"){
            setAllBtnColor('bg-white');
            setPayBtnColor('');
            setShipBtnColor('');
            setReceiveBtnColor('')
        }
        else if(value==="topay"){
            setAllBtnColor('');
            setPayBtnColor('bg-white');
            setShipBtnColor('');
            setReceiveBtnColor('')
        }
        else if(value==="toship"){
            setAllBtnColor('');
            setPayBtnColor('');
            setShipBtnColor('bg-white');
            setReceiveBtnColor('')
        }
        else if(value==="toreceive"){
            setAllBtnColor('');
            setPayBtnColor('');
            setShipBtnColor('');
            setReceiveBtnColor('bg-white')
        }
    }

    return(
        <div>
            <h3 className="text-xl font-semibold pb-3">My Orders</h3>
            <div className="p-1">
                <nav>
                    <Link onClick={()=> handleColorChange('all')} className={`md:px-5 px-5 font-semibold py-2 ${allBtnColor} rounded-t-md `} to='/user/myorders/all'>All</Link>

                    <Link onClick={()=> handleColorChange('topay')} className={`md:px-5 font-semibold px-2 py-2 ${payBtnColor} rounded-t-md `} to='/user/myorders/topay'>To Pay</Link>

                    <Link onClick={()=> handleColorChange('toship')} className={`md:px-5 px-2 font-semibold py-2 ${shipBtnColor} rounded-t-md `} to='/user/myorders/toship'>To Ship</Link>

                    <Link onClick={()=> handleColorChange('toreceive')} className={`pmd:px-5 font-semibold px-2 py-2 ${receiveBtnColor} rounded-t-md `} to='/user/myorders/toreceive'>To Receive</Link>
                </nav>
                <div className="px-3 bg-white">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}