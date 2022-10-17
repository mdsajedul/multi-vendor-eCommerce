
import {Link} from "react-router-dom"
export default function ProductCard({product}){
    console.log(product)
    const {name,thumbnail,retailPrice} = product || {}
    
    return(
            <div class="max-w-sm bg-white rounded-lg border border-gray-200">
                <Link to="">
                    <img class="rounded-t-lg" src={`http://localhost:8000/uploads/${thumbnail}`} alt=""/>
                </Link>
                <div class="p-5">
                    <Link to="">
                        <h5 class="mb-2 text-md font-bold  text-gray-900 ">{name}</h5>
                    </Link>

                    <p>Price: {retailPrice}</p>
                    
                    <button class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Add to cart
                    </button>
                </div>
            </div>
    )
}