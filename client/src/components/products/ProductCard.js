
import {Link} from "react-router-dom"
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import {ShoppingBagIcon,ShoppingCartIcon} from "@heroicons/react/24/outline"
export default function ProductCard({product}){
    const {name,thumbnail,retailPrice,_id} = product || {};
    const dispatch = useDispatch()
    
    return( 
        <div class="w-full max-w-sm bg-white rounded-lg shadow-md ">
            <Link to={`/product/${_id}`}>
                <img class="w-full h-44 rounded-t-lg" src={`http://localhost:8000/uploads/${thumbnail}`} alt="product"/>
            </Link>
            <div class="p-2 pb-5">
                <Link to={`/product/${_id}`}>
                    <h5 class="text-base font-semibold tracking-tight text-gray-900 ">{product?.name}</h5>
                </Link>
                <div class="flex items-center mt-2.5 mb-5">
                    <ReactStars
                        count={5}
                        value={4.5}
                        size={22}
                        activeColor="#ffd700"
                        edit={false}
                        isHalf={true}
                    />
                    
                    <span class="bg-orange-100 text-orange-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">4.5</span>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-2xl font-bold text-gray-700">${product?.retailPrice}</span>
                    <button class="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-md text-sm px-4 py-2 text-center"  onClick={()=>dispatch(addToCart(product))}>
                        <span className="hidden md:block">Add to cart</span>
                        <ShoppingCartIcon className="h-6 px-3 md:hidden "/>
                        </button>
                </div>
            </div>
        </div>
    )
}