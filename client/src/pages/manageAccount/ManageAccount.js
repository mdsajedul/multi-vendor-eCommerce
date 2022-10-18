import { useSelector } from "react-redux"

export default function ManageAccount(){
    const {user} = useSelector((state)=>state.auth)
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
                                <button className="text-orange-500">Edit</button>
                            </div>
                            <p className="py-2 text-gray-500">DEFAULT SHIPPING ADDRESS </p>
                            <div>
                                <p className="font-semibold">{user?.name}</p>
                                <address className="font-light">
                                    Block:C,Road:13,House: 295
                                    Dhaka - Dhaka - North - Bashundhara R/A
                                    (+880) 1780464419
                                </address>
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
                                    <address className="font-light">
                                        Block:C,Road:13,House: 295
                                        Dhaka - Dhaka - North - Bashundhara R/A
                                        (+880) 1780464419
                                    </address>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}