import { useDispatch } from "react-redux"
import { decrementQuantity, incrementQuantity, removeFromCart } from "../../features/cart/cartSlice"

export default function CartProductCard ({product}){

    const dispatch = useDispatch()
    return(
        <div className="md:flex md:justify-evenly ">
            <div className="grid grid-cols-12 py-5 px-5">
                <div className="col-span-1 flex items-center">
                    <input className="rounded-sm focus:text-orange-700 text-orange-700 focus:outline-none focus:ring-0" type="checkbox" name="" id="" />
                </div>
                <div className="col-span-3 flex items-center">
                    <img src={`http://localhost:8000/uploads/${product?.thumbnail}`} alt=""/> 
                </div>
                <div className="col-span-5 flex items-center ">
                    <p className="md:px-2">{product?.name}</p>
                </div>
                <div className="col-span-3 flex items-center font-semibold">
                    <p>$ {product?.retailPrice}</p>
                </div>
            </div>

            <div className="flex items-center p-5">
                <div className="pr-3 md:flex">
                    <button className=" border rounded-l-md border-orange-600 md:text-xl md:px-2 md:py-1 text-3xl px-5 py-2" onClick={()=>dispatch(incrementQuantity(product))}>+</button>
                    <span className="border border-orange-600 md:text-xl md:px-2 md:py-1 text-3xl px-5 py-1.5">{product?.quantity}</span>
                    <button className="border rounded-r-md border-orange-600 md:text-xl md:px-2 md:py-1 text-3xl px-5 py-2" onClick={()=> dispatch(decrementQuantity(product))}> - </button>
                </div>
                <div>
                    <button className="px-2" onClick={()=>dispatch(removeFromCart(product))}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </button>
                    <button className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </button>
                </div>
            </div>

        </div>
        
    )
}

