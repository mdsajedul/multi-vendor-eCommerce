import { Outlet } from "react-router-dom";
import { useGetShopQuery } from "../../features/shop/shopApi";


export default function Dashboard (){
    const {data: shop, isError:isShopError,isLoading: isShopLoading,error:shopError} = useGetShopQuery()
    return(
        <Outlet context={[shop,isShopError,isShopLoading,shopError]}/>
    )
}