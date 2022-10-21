import TextInput from "../ui/TextInput";
import {CameraIcon} from "@heroicons/react/24/solid"
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

export default function CreateShop(){

    const [shopProfile,setShopProfile] = useState(null)
    const [preview,setPreview] = useState()
    const [shopName,setShopName] = useState('')
    const [shopEmail,setShopEmail] = useState('')
    const [shopMobile,setShopMobile] = useState('')
    const [shopDetail,setShopDetail] = useState('')
    const navigate = useNavigate()

    const handleCancel = ()=>{
        navigate('/')
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
    }

    useEffect(()=>{
        if(!shopProfile){
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(shopProfile)
        setPreview(objectUrl)
        return ()=> URL.revokeObjectURL(objectUrl)
    },[shopProfile])
    return(
        <div>
            <div className=" p-5 rounded">
                <div className="bg-orange-100 rounded-t p-3">
                    <span className="text-xl text-orange-600 font-semibold">Create Your Shop</span>
                </div>
                <div className="p-3 bg-white rounded-b">
                    <form className="px-2" onSubmit={handleSubmit} encType='multipart/form-data'>
                        <div className="md:grid md:grid-cols-2 md:gap-8 pb-4">
                            <div>
                                <label className="font-semibold text-gray-600" htmlFor="">Your Shop Name</label>
                                <TextInput onChange={(e)=>setShopName(e.target.value)} value={shopName}/>
                            </div>
                            <div className="md:flex items-center justify-center">
                               
                               <div className="md:flex flex-col justify-center items-center">
                                {shopProfile===null? <label className="font-semibold text-gray-600 cursor-pointer" htmlFor="shopProfileImage">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                                        </svg>
                                    </label>
                                    :
                                    <img className="w-12 h-12 rounded" src={preview} alt="shop" />
                                }
                                    
                                    {shopProfile===null? <label className="font-semibold text-gray-600"  htmlFor="">Shop Profile Image</label>
                                    :
                                    <label className="font-semibold text-orange-600 cursor-pointer"  htmlFor="shopProfileImage">Change Image</label>
                                }
                                    <input onChange={(e)=>setShopProfile(e.target.files[0])}  className="hidden" id="shopProfileImage" type="file" src="" alt="" />
                               </div>
                                
                            </div>
                        </div>
                        <div className="md:grid grid-cols-2 md:gap-8 pb-4">
                            <div className="">
                                <label className="font-semibold text-gray-600"  htmlFor="">Shop Email</label>
                                <TextInput onChange={(e)=> setShopEmail(e.target.value)} value={shopEmail}/>
                            </div>
                            <div className="">
                                <label className="font-semibold text-gray-600"  htmlFor="">Shop Phone</label>
                                <div className="flex items-center gap-4">
                                    <span className="font-semibold text-gray-600">+880</span>
                                    <TextInput onChange={(e)=> setShopMobile(e.target.value)} value={shopMobile}/>
                                </div>
                                
                            </div>
                        </div>
                        <div>
                            <label className="font-semibold text-gray-600"  htmlFor="">Shop Detail</label> <br />
                            <textarea className=" form-control block w-full my-1.5 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none" onChange={(e)=>setShopDetail(e.target.value)} value={shopDetail}/>
                        </div>
                        <div className="flex justify-between">
                            <Button  bgColor={"orange"} textColor={"white"} name={"Cancel"} onClick={handleCancel}/>
                            <Button type="submit" bgColor={"green"} textColor={"white"} name={"Submit"}/>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}