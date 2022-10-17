import { useSelector } from "react-redux"
import CartProductCard from "./CartProductCard";

export default function CartItem({shop}){
    const {cart} = useSelector((state)=>state.cart)
    

    let shopProducts = cart.filter((product)=> product.shopId === shop.shopId );

    let content ;
    if(!shop?.shopId){
        content= <div>Not found</div>
    }
    else if(shop?.shopId){
        content = shopProducts.map((product)=> <CartProductCard key={product._id} product={product}/>)
    }

    return(
        <div className="mb-10 bg-white rounded-md">
            <div className="py-3 px-5 flex items-center">
                <input className="rounded-sm focus:text-orange-700 text-orange-700 focus:outline-none focus:ring-0" type="checkbox" name="" id="" />
                <span className="pl-3 font-semibold">{shop?.shopName}</span>
            </div>
            <hr />
            <div>
            {
                content
            }
            </div>
        </div>
    )
}