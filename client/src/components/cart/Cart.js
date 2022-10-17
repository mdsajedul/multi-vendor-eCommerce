import CartItem from "./CartItem";

export default function Cart(){
    return(
        <div className="p-4 grid md:grid-cols-3 md:gap-5">
            <div className="col-span-2">
                <div className="bg-white p-2 rounded-md my-2">
                    <p className="my-1">Preferred Delivery Option</p>
                    <div>
                        <div className="border border-orange-700 rounded-md p-2 my-1">
                            <p>Please select items</p>
                        </div>
                        <div className="border border-orange-700 rounded-md p-2 my-1">
                            <p>$ 60</p>
                            <p> Express Delivery</p>
                            <p>Estimated Delivary By 18 oct 2022</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between bg-white p-2 rounded-md">
                    <div className="flex items-center">
                        <input className="rounded-sm focus:text-orange-700 text-orange-700 focus:outline-none focus:ring-0" type="checkbox" />
                        <label className="px-1">Select all item</label>
                    </div>
                    <button className="bg-red-700 text-white px-3 py-1 rounded-md">
                        Delete
                    </button>
                </div>
                <div className="bg-white p-2 rounded-md my-2">
                    <CartItem/>
                </div>

            </div>
            <div className="col-span-1">
                <h3>Order Summary</h3>

            </div>
        </div>
    )
}