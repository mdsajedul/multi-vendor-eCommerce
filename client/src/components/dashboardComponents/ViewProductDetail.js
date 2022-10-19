import { useParams } from "react-router-dom"

export default function ViewProductDetail(){

    const {id} = useParams()

    return(
        <div>
            product detail {id}
        </div>
    )
}