import { useParams } from "react-router-dom"
import { useGetProductDetailQuery } from "../../features/products/productsApi"
import Error from "../ui/Error";
import ReactStars from "react-rating-stars-component";

export default function ProductDetail (){
    const {id} = useParams()

    const {data: product, isLoading,isError,error} = useGetProductDetailQuery(id);
    

    console.log(product)
    let content ;
    if(isLoading){
        content = <div>Loading...</div>
    }
    else if(!isLoading && isError){
        content = <Error message={error}/>
    }
    else if(!isLoading && !isError && !product?.name){
        content = <Error message="Product not found!"/>
    }
    else if ( !isLoading && !isError && product?.name){
        content = <div className="p-5 md:columns-2 md:gap-5" >
                        <div className="">
                            <img class="rounded-t-md w-full " src={`http://localhost:8000/uploads/${product?.thumbnail}`} alt=""/>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold py-3">{product?.name}</h2>
                            <span className="text-xl font-semibold py-1">$ {product?.retailPrice}</span>
                            <p className="py-3">{product?.detail} || Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid error debitis sapiente reiciendis amet mollitia, adipisci qui, accusamus voluptas quasi modi consequuntur necessitatibus voluptatem molestiae libero, minima exercitationem deserunt eos atque. Praesentium repudiandae delectus omnis dolor minus sed, numquam molestiae quisquam explicabo mollitia doloribus quasi esse a soluta animi harum.</p>
                            <hr />
                            <div className="flex justify-between py-3">
                                <span>Total Reviews: {product?.reviews.length}</span>
                                <ReactStars
                                    count={5}
                                    value={4.5}
                                    size={20}
                                    activeColor="#ffd700"
                                    edit={false}
                                    isHalf={true}
                                />
                            </div>
                            <p>In Stock: {product?.quantity}</p>
                            <p className="pb-3">Shop: {product?.shopName}</p>
                            <hr />
                            <div>
                                <div className="py-3">
                                    <p className="text-lg py-1">Quantity</p>
                                    <button className=" border rounded-l-md border-orange-600 text-3xl px-5 py-2">+</button>
                                    <span className="border border-orange-600 text-3xl px-5 py-1.5">0</span>
                                    <button className="border rounded-r-md border-orange-600 text-3xl px-5 py-2">-</button>
                                </div>
                                <div className="flex justify-between">
                                    <button className="bg-orange-600 text-white py-2 px-4 rounded-sm w-2/5">Add To Card</button>
                                    <button className="bg-gray-600 text-white py-2 px-4 rounded-sm w-2/5">Wish List</button>
                                </div>
                                
                            </div>
                            
                        </div>
                </div>
    }

    return(
        <div>
            {
                content
            }
        </div>
    )
}