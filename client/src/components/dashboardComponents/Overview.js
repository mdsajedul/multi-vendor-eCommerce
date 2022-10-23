import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useGetShopQuery } from "../../features/shop/shopApi"

export default function Overview(){
    const {user} = useSelector((state)=>state.auth)
    const {data: shop, isError:isShopError,isLoading: isShopLoading,error:shopError} = useGetShopQuery()
    return(
        <div>
            <div className=" p-5 rounded">
                <div className="bg-orange-100 rounded-t p-3">
                    <span className="text-xl text-orange-600 font-semibold">Overview</span>
                </div>
                <div className="p-3 bg-white rounded-b ">
                {(user?.role==='seller' && !shop) && 
                    <div className="">
                        <span className="block text-lg text-orange-600 text-center pb-2">You havent't create any shop yet.</span>
                        <span className="block text-lg text-gray-600 text-center">For creating brand new shop <Link to='/user/dashboard/createshop' className='text-orange-600'>Click Here</Link></span>
                    </div>
                }
                </div>
            </div>
        </div>
    )
}