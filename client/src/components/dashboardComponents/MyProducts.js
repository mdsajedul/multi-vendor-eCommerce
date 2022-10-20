import {useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useOutletContext } from "react-router-dom";
import { useDeleteProductBySellerMutation, useGetProductsBySellerQuery } from "../../features/products/productsApi"
import Error from "../ui/Error";
import ModalAlart from "../ui/ModalAlart";

export default function MyProducts(){
    const {data:products,isError,isLoading,error} = useGetProductsBySellerQuery()
    const [shop,isSopError,isShopLoading,shopError] = useOutletContext()
    const [open, setOpen] = useState(false)
    const [removeProductName,setRemoveProductName] = useState('');
    const [removeProductId,setRemoveProductId] = useState('');
    const [deleteProductBySeller] = useDeleteProductBySellerMutation()



    /** 
     * executeAction Method
     * * this is the method which is responsible for delete product
     * * this function written here, but called form modal.
     */
    const executeAction=()=>{
        deleteProductBySeller(removeProductId)
    }


    /** 
     * handleRemove Method
     * * this method is for table delete icon, it open modal and set some state
     */
    const handleRemove = ({id,name})=>{
        setOpen(true)
        setRemoveProductName(name)
        setRemoveProductId(id)
    }

    let content;
    if(isLoading){
        content=<div>Loading...</div>
    }
    else if(!isLoading && isError){
        content = <Error message={error}/>
    }
    else if(!isLoading && !isError && products?.length === 0){
        content = <div>You have no product!</div>
    }
    else if(!isLoading && !isError && products?.length > 0){
        
        content = products.map((product)=> (
            <tr key={product?._id} className="border-b border-orange-200 hover:bg-orange-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="mr-2">
                        <img className="w-6 h-6 rounded-full" src={`http://localhost:8000/uploads/${product?.thumbnail}`} alt=""/>
                        </div>
                        <span className="font-medium">{product.name}</span>
                    </div>
                </td>
                <td className="py-3 px-6 text-left">
                    <div>
                        <span className="text-base font-semibold">{product?.category?.[0]?product?.category?.[0] : 'Not Found' }</span>
                    </div>
                </td>
                <td className="py-3 px-6 text-center">
                    <span className="text-base font-semibold">{product?.inStock}</span>
                </td>
                <td className="py-3 px-6 text-center">
                    <span className="text-base font-semibold">{product?.purchasePrice}</span>
                </td>
                <td className="py-3 px-6 text-center">
                    <span className="text-base font-semibold">{product?.retailPrice}</span>
                </td>
                <td className="py-3 px-6 text-center">
                    <div className="flex item-center justify-center">
                        <Link to={`${product._id}`} className="w-4 mr-2 transform hover:text-orange-500 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </Link>
                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </div>
                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                            onClick={()=>handleRemove({id:product?._id,name:product?.name})}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </div>
                    </div>
                </td>
            </tr>
        ) )
    }

    return(
        <div>
            <div className="flex items-center md:mb-4">
                <img className="w-7 rounded-full" src={`http://localhost:8000/uploads/${shop?.profilePicture}`} alt="" />
                <span  className="ml-2">{shop?.name}</span>
            </div>
            <div className="p-5">
                <span className="text-xl font-semibold ">All Your Products</span>
                <div className="">
                    {/* table start */}
                    <div className="overflow-x-auto">
                        <div className="min-w-screen  bg-gray-100 flex items-center justify-center font-sans ">
                            <div className="w-full ">
                                <div className="bg-white shadow-md rounded my-6">
                                    <table className="min-w-max w-full table-auto">
                                        <thead>
                                            <tr className="bg-orange-200 text-orange-600 text-sm leading-normal">
                                                <th className="py-3 px-6 text-left">Product</th>
                                                <th className="py-3 px-6 text-left">Category</th>
                                                <th className="py-3 px-6 text-center">In Stock</th>
                                                <th className="py-3 px-6 text-center">Cost Price</th>
                                                <th className="py-3 px-6 text-center">MRP</th>
                                                <th className="py-3 px-6 text-center">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-600 text-sm font-light">
                                            {
                                                content
                                            }
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ModalAlart 
                open={open}
                setOpen={setOpen}
                heading="Remove Product"
                details = {`Are you sure to remove ${removeProductName}? Product will be permanently
                removed. This action cannot be undone.` }
                confirmButton = "Remove"
                executeAction={executeAction}
                icon="delete"
            />
            
        </div>
    )
}