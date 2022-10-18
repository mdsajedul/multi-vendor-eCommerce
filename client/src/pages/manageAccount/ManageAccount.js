import { useState } from "react"
import { useSelector } from "react-redux"
import Button from "../../components/ui/Button"
import Dropdown from "../../components/ui/Dropdown"
import TextInput from "../../components/ui/TextInput"

export default function ManageAccount(){
    const {user} = useSelector((state)=>state.auth)
    const [profileEditOn,setProfileEditOn] = useState(false)
    const [shippingAddreddEditOn,setShippingAddressEditOn] = useState(false)
    const [billingAddreddEditOn,setBillingAddressEditOn] = useState(false)

    const genderOptions = [
        {value:'male', text:'Male'},
        {value:'female', text:'Female'},
        {value:'other', text:'Other'},
      ]

    return(
        <div>
            <h3 className="text-xl font-semibold pb-3">Manage My Account</h3>
            <div className="grid md:grid-cols-3 gap-4 p-1">
                <div className="md:col-span-1 bg-white p-4">

                    {/* Profile Section  */}

                    <div className="flex items-center">
                        <span className="pr-3">Personal Profile</span>
                        <div className="border-orange-300 border-l-2 p-2 h-3"></div>
                        <button className="text-orange-500" onClick={()=>setProfileEditOn(true)}>Edit</button>
                    </div>
                    <div className="py-3">
                        {profileEditOn?
                        <div>
                            <TextInput value={user?.name}/>
                            <TextInput value={user?.email}/>
                            {/* <Form value={user?.username}/> */}
                            <Dropdown name='Gender' textColor="gray" bgColor="white" borderColor="gray" list={genderOptions}/>

                            <div className="flex justify-between">
                                <Button name={'Cancel'} bgColor='orange' textColor='white' onClick={()=>setProfileEditOn(false)}/>
                                <button type="button" className={`my-2 inline-block px-6 py-2 bg-green-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out`}>Submit</button>
                            </div>
                        </div>
                        :    
                        <div>
                            <p className="pb-1 font-semibold">{user?.name}</p>
                            <p className="pb-1"> Email: {user?.email}</p>
                            <p>DOB: {user?.dob}</p>
                            <p>Username: {user?.username}</p>
                            <p>Role: {user?.role}</p>
                            <p>Gender: {user?.gender}</p>
                        </div>}
                    </div>
                </div>

                {/* Address book  */}
                <div className="md:col-span-2 bg-white">
                    <div className="md:grid md:grid-cols-11 ">

                        {/* shipping Address  */}
                        <div className="md:col-span-5 p-4 ">

                            <span>Address Book</span>
                            <p className="py-2 text-gray-500">DEFAULT SHIPPING ADDRESS </p>

                            <div>
                                <div className="flex items-center">
                                    <p className="font-semibold pr-3">{user?.name}</p>
                                    <div className="border-orange-300 border-l-2 p-2 h-3"></div>
                                    <button className="text-orange-500" onClick={()=>setShippingAddressEditOn(true)}>Edit</button>
                                </div>
                                {shippingAddreddEditOn? 
                                <div className="p-2">
                                    <form action="">
                                    <textarea className="w-full rounded-md border-orange-500 outline-none focus:outline-none focus:ring-orange-600 focus:border-orange-500" name="" placeholder="Enter your full address" id="" cols="30" rows="1"></textarea>
                                    </form>
                                    <input className="w-full rounded-md border-orange-500 outline-none focus:outline-none focus:ring-orange-600 focus:border-orange-500" type="text" name="" id="" placeholder="Your active phone number" />
                                    <div className="flex justify-between">
                                        <Button name={'Cancel'} bgColor='orange' textColor='white' onClick={()=>setShippingAddressEditOn(false)}/>
                                        <Button name="Submit" bgColor='green' textColor='white' />
                                        
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
                        <div className="md:col-span-5 p-4 flex">
                            <div className="pt-6">
                                <p className="py-2 text-gray-500">DEFAULT BILLING ADDRESS </p>
                                <div>
                                <div className="flex items-center">
                                    <p className="font-semibold pr-3">{user?.name}</p>
                                    <div className="border-orange-300 border-l-2 p-2 h-3"></div>
                                    <button className="text-orange-500" onClick={()=>setBillingAddressEditOn(true)}>Edit</button>
                                </div>
                                    {billingAddreddEditOn? 
                                    <div className="p-2">
                                        <form action="">
                                        <textarea className="w-full rounded-md border-orange-500 outline-none focus:outline-none focus:ring-orange-600 focus:border-orange-500" name="" placeholder="Enter your full address" id="" cols="30" rows="1"></textarea>
                                        </form>
                                        <input className="w-full rounded-md border-orange-500 outline-none focus:outline-none focus:ring-orange-600 focus:border-orange-500" type="text" name="" id="" placeholder="Your active phone number" />
                                        <div className="flex justify-between">
                                            <Button name={'Cancel'} bgColor='orange' textColor='white' onClick={()=>setBillingAddressEditOn(false)}/>
                                            <Button name={'Submit'} bgColor='green' textColor='white'/>
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