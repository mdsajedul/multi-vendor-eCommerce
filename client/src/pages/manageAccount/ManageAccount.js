import { useSelector } from "react-redux"

export default function ManageAccount(){
    const {user} = useSelector((state)=>state.auth)
    console.log(user)
    return(
        <div>
            <h3 className="text-xl font-semibold pb-3">Manage My Account</h3>
            <div className="md:grid md:grid-cols-3 md:gap-4 p-1">
                <div className="md:col-span-1 bg-white p-4">
                    <div className="flex items-center">
                        <span className="pr-3">Personal Profile</span>
                        <div className="border-orange-300 border-l-2 p-2 h-3"></div>
                        <button className="text-orange-500">Edit</button>
                    </div>
                    <div className="py-3">
                        <p className="pb-1">{user?.name}</p>
                        <p className="pb-1">{user?.email}</p>
                    </div>
                </div>
                <div className="md:col-span-2 bg-white">
                    <div className="md:grid md:grid-cols-2">
                        <div className="md:col-span-1 p-4">
                            <div className="flex items-center">
                                <span className="pr-3">Personal Profile</span>
                                <div className="border-orange-300 border-l-2 p-2 h-3"></div>
                                <button className="text-orange-500">Edit</button>
                            </div>
                            <p>DEFAULT SHIPPING ADDRESS </p>
                            <div>
                                <p>{user?.name}</p>
                                <address>
                                    Block:C,Road:13,House: 295
                                    Dhaka - Dhaka - North - Bashundhara R/A
                                    (+880) 1780464419
                                </address>
                            </div>
                        </div>
                        <div className="border-orange-300 border-l-2 m-2 h-32"></div>
                        <div className="md:col-span-1">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}