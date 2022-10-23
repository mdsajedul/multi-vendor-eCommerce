import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { userLoggedOut } from "../../features/auth/authSlice";
import { useGetShopQuery } from "../../features/shop/shopApi";


export default function Dashboard (){
    const {data: shop, isError:isShopError,isLoading: isShopLoading,error:shopError} = useGetShopQuery()
    const dispatch = useDispatch()
    const navigate = useNavigate()


    if(isShopError){
        if(shopError?.originalStatus===401){
            dispatch(userLoggedOut())
            navigate("/login")
        }
    }

    // if(shopError?.originalStatus===401){
    //     dispatch(userLoggedOut())
    //     navigate("/login")
    // }
    return(
        <Outlet context={[shop,isShopError,isShopLoading,shopError]}/>
    )
}