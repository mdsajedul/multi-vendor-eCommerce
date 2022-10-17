import { useParams } from "react-router-dom"
import { useGetProductDetailQuery } from "../../features/products/productsApi"
import Error from "../ui/Error";

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
    else if(!isLoading && !isError && !product?.product?.name){
        content = <Error message="Product not found!"/>
    }
    else if ( !isLoading && !isError && product?.product?.name){
        content = <div>All ok</div>
    }

    return(
        <div>
            {
                content
            }
        </div>
    )
}