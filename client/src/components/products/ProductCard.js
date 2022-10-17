
import {Link} from "react-router-dom"
import ReactStars from "react-rating-stars-component";
export default function ProductCard({product}){
    console.log(product)
    const {name,thumbnail,retailPrice,_id} = product || {}
    
    return(
            <div class="max-w-sm bg-white rounded-lg border border-gray-200">
                <Link to={`/product/${_id}`}>
                    <img class="rounded-t-lg h-44 w-full" src={`http://localhost:8000/uploads/${thumbnail}`} alt=""/>
                </Link>
                <div class="p-3">
                    <Link to={`/product/${_id}`}>
                        <h5 class="mb-2 text-md font-semibold  text-gray-900 ">{name}</h5>
                    </Link>

                    <div className="flex justify-items-start items-center mb-1">
                        <ReactStars
                            count={5}
                            value={4.5}
                            size={20}
                            activeColor="#ffd700"
                            edit={false}
                            isHalf={true}
                        />
                        <span> (7)</span>
                    </div>

                     

                    <div className="flex justify-between">
                        <span className="font-semibold">$ {retailPrice}</span>
                        
                        <button class="inline-flex items-center py-1 px-2 text-sm text-center text-white bg-blorangeue-700 rounded-lg hover:bg-orange-800 focus:ring-0 focus:outline-none focus:ring-orange-300 dark:bg-orange-600  ">
                            Add to cart
                        </button>
                    </div>

                    
                </div>
            </div>
    )
}