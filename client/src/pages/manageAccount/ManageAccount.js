import { useState } from "react"
import { useSelector } from "react-redux"

export default function ManageAccount(){
    const {user} = useSelector((state)=>state.auth)
    const [profileEditOn,setProfileEditOn] = useState(false)
    const [addreddEditOn,setAddressEditOn] = useState(false)
    console.log(user)


    return(
        <div>
            <h3 className="text-xl font-semibold pb-3">Manage My Account</h3>
            <div className="grid md:grid-cols-3 gap-4 p-1">
                <div className="md:col-span-1 bg-white p-4">

                    {/* Profile Section  */}

                    <div className="flex items-center">
                        <span className="pr-3">Personal Profile</span>
                        <div className="border-orange-300 border-l-2 p-2 h-3"></div>
                        <button className="text-orange-500">Edit</button>
                    </div>
                    <div className="py-3">
                        <p className="pb-1 font-semibold">{user?.name}</p>
                        <p className="pb-1"> Email: {user?.email}</p>
                        <p>DOB: {user?.dob}</p>
                        <p>Username: {user?.username}</p>
                        <p>Role: {user?.role}</p>
                        <p>Gender: {user?.gender}</p>
                    </div>
                </div>

                {/* Address book  */}
                <div className="md:col-span-2 bg-white">
                    <div className="md:grid md:grid-cols-11">
                        {/* shipping Address  */}
                        <div className="md:col-span-5 p-4">
                            <div className="flex items-center">
                                <span className="pr-3">Address Book</span>
                                <div className="border-orange-300 border-l-2 p-2 h-3"></div>
                                <button className="text-orange-500" onClick={()=>setAddressEditOn(true)}>Edit</button>
                            </div>
                            <p className="py-2 text-gray-500">DEFAULT SHIPPING ADDRESS </p>
                            <div>
                                <p className="font-semibold">{user?.name}</p>
                                {addreddEditOn? 
                                <div className="p-2">
                                    <form action="">
                                    <textarea className="w-full rounded-md border-orange-500 outline-none focus:outline-none focus:ring-orange-600 focus:border-orange-500" name="" placeholder="Enter your full address" id="" cols="30" rows="1"></textarea>
                                    </form>
                                    <input className="w-full rounded-md border-orange-500 outline-none focus:outline-none focus:ring-orange-600 focus:border-orange-500" type="text" name="" id="" placeholder="Your active phone number" />
                                    <div className="flex justify-between">
                                        <button className="px-3 py-1 text-white rounded-sm bg-orange-600 mt-3" onClick={()=>setAddressEditOn(false)}>Cancel</button>
                                        <button type="submit" className="px-3 py-1 text-white rounded-sm bg-green-600 mt-3">Submit</button>
                                    </div>
                                </div>
                                : 
                                <address className="font-light">
                                    Block:C,Road:13,House: 295
                                    Dhaka - Dhaka - North - Bashundhara R/A
                                    (+880) 1780464419
                                </address>}
                            </div>
                        </div>

                        {/* vartical line  */}
                        <div className="md:col-span-1 flex items-center">
                            <div className="md:block hidden border-orange-300 border-l-2 m-2 h-32"></div>
                        </div>
                        
                        {/* billing Address  */}
                        <div className="md:col-span-5 p-4 flex items-center">
                            <div className="pt-6">
                                <p className="py-2 text-gray-500">DEFAULT BILLING ADDRESS </p>
                                <div>
                                    <p className="font-semibold">{user?.name}</p>
                                    {addreddEditOn? 
                                    <div className="p-2">
                                        <form action="">
                                        <textarea className="w-full rounded-md border-orange-500 outline-none focus:outline-none focus:ring-orange-600 focus:border-orange-500" name="" placeholder="Enter your full address" id="" cols="30" rows="1"></textarea>
                                        </form>
                                        <input className="w-full rounded-md border-orange-500 outline-none focus:outline-none focus:ring-orange-600 focus:border-orange-500" type="text" name="" id="" placeholder="Your active phone number" />
                                        <div className="flex justify-between">
                                            <button className="px-3 py-1 text-white rounded-sm bg-orange-600 mt-3" onClick={()=>setAddressEditOn(false)}>Cancel</button>
                                            <button type="submit" className="px-3 py-1 text-white rounded-sm bg-green-600 mt-3">Submit</button>
                                        </div>
                                    </div>
                                    : 
                                    <address className="font-light">
                                        Block:C,Road:13,House: 295
                                        Dhaka - Dhaka - North - Bashundhara R/A
                                        (+880) 1780464419
                                    </address>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}