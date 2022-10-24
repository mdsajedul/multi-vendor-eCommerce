import { useEffect } from "react"
import ReactStars from "react-rating-stars-component"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useGetShopQuery } from "../../features/shop/shopApi"

export default function MyShop (){
    const {user} = useSelector((state)=>state.auth)
    const {data: shop, isError:isShopError,isLoading: isShopLoading,error:shopError,refetch} = useGetShopQuery()
    console.log(shop)
    // refetch()

    // useEffect(()=>{
    //     refetch()
    // },[refetch])
    
    return(
        <div>
            <div className=" p-5 rounded bg-white">
                <div className="flex justify-between">
                    
                    <div class=" bg-white  ">
                        <div class=" flex flex-col md:flex-row justify-center items-center pt-5 pb-10">
                            {/* profile image  */}
                            <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src={`http://localhost:8000/uploads/${shop?.profilePicture}`} alt="Bonnie"/>

                            {/* content  */}
                            <div className="flex flex-col items-center pl-5">
                                <div className="md:flex md:items-center">
                                    <h5 class="mb-1 text-xl font-medium text-orange-600 ">{shop?.name.toUpperCase()}</h5>
                                    <span className={`${shop?.status==="inactive" ? `bg-orange-100 text-orange-800`: `bg-green-100 text-green-800`} text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3`}>{shop?.status}</span>
                                </div>
                                <div className="flex items-center">
                                    <ReactStars
                                        count={5}
                                        value={4.5}
                                        size={22}
                                        activeColor="#ffd700"
                                        edit={false}
                                        isHalf={true}
                                    />
                                    
                                    <span className="bg-orange-100 text-orange-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">4.5</span>
                                </div>
                                                <div>
                                    <div className="flex flex-col md:flex-row items-center  md:gap-4 pb-3">
                                        
                                        <div className="flex items-center" >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3 text-gray-700">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                            </svg>
                                            <span className="text-sm pl-1 text-gray-700">+8801780464419</span>
                                        </div>
                                        <div className="flex items-center" >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                                            <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                                            </svg>

                                            <span className="text-sm text-gray-700">sajedulislms@gmail.com</span>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="py-3">
                                        <p className="text-gray-700">{shop?.description}</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* edit button  */}
                    <div className="">
                        <Link to="/user/dashboard/createshop" className="flex item-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-orange-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                            <button className="text-orange-600">Edit</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
} 


// {(user?.role==='seller' && !shop) && 
// <div className="">
//     <span className="block text-lg text-orange-600 text-center pb-2">You havent't create any shop yet.</span>
//     <span className="block text-lg text-gray-600 text-center">For creating brand new shop <Link to='/user/dashboard/createshop' className='text-orange-600'>Click Here</Link></span>
// </div>
// }










