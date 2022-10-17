import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAllFromCart } from "../../features/cart/cartSlice";
import CartItem from "./CartItem";

export default function Cart(){

    const {cart,shop : shops} = useSelector((state)=> state.cart);
    const dispatch = useDispatch()
    
    const [productCountOnCart,setProductCountOnCart]= useState(0)
    const [totalProductPrice,setTotalProductPrice]= useState(0)
    const [totalWithShipping,setTotalWithShipping]= useState(0)

    // now it is constant, it will be dynamic 
    const [shippingFee, setShippingFee] = useState(60)

    
  
    useEffect(()=>{
      let total = 0;
      let totalPrice =0;
      cart.forEach(product => {
        total += product.quantity
        totalPrice += product.retailPrice * product.quantity;
      });
      setProductCountOnCart(total)
      setTotalProductPrice(totalPrice)
      
      setTotalWithShipping(totalProductPrice+shippingFee)
    },[cart,shippingFee,totalProductPrice])
    
    

    let content ;
    if(shops.length===0){
        content = <div className="text-center p-5">Your Cart is Empty</div>
    }
    if(shops.length>0){
        content = shops.map((shop)=> <CartItem key={shop.shopId} shop={shop}/>)

    }

    return(
        <div className="p-4 grid md:grid-cols-3 md:gap-5">
            <div className="col-span-2">
                <div className="bg-white p-2 rounded-md my-2">
                    <p className="my-1">Preferred Delivery Option</p>
                    <div>
                        <div className="border border-orange-700 rounded-md p-2 my-1">
                            <p>Please select items</p>
                        </div>
                        <div className="border border-orange-700 rounded-md p-2 my-1">
                            <p>$ 60</p>
                            <p> Express Delivery</p>
                            <p>Estimated Delivary By 18 oct 2022</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between bg-white p-2 rounded-md">
                    <div className="flex items-center">
                        <input className="rounded-sm focus:text-orange-700 text-orange-700 focus:outline-none focus:ring-0" type="checkbox" />
                        <label className="px-1">Select all item</label>
                    </div>
                    <button className="text-red-700 px-3 py-1 rounded-md" onClick={()=>dispatch(removeAllFromCart())} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </button>
                </div>
                <div className="  my-2">
                    {
                    content
                    }
                </div>
                
            </div>

            <div className="col-span-2 md:col-span-1">
                <div className="bg-white p-2 rounded-md my-2">
                    <p className="text-xl font-semibold">Order Summary</p>
                    <div className="flex justify-between p-3">
                        <span>Subtotal ({productCountOnCart})</span>
                        <span>$ {totalProductPrice}</span>
                    </div>
                    <div className="flex justify-between p-3">
                        <span>Shipping Fee </span>
                        <span>$ {shippingFee}</span>
                    </div>
                    <div className="flex justify-between p-3">
                        <input className="w-full border-orange-600 focus:ring-0 focus:outline-none focus:border-orange-600" placeholder="Enter Voucher Code" type="text" />
                        <button className="bg-orange-600 text-white px-7">APPLY</button>
                    </div>
                    <div className="flex justify-between p-3">
                        <span className="text-xl font-semibold">Total </span>
                        <span className="text-xl font-semibold">$ {totalWithShipping}</span>
                    </div>
                    <button className="w-full text-xl bg-green-700 text-white py-3">Proced To Buy</button>
                </div>
            </div>
        </div>
    )
}