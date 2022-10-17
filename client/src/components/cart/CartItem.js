
export default function CartItem(){
    return(
        <div>
            <div>
                <input type="checkbox" name="" id="" />
                <span>Company Name</span>
            </div>
            <hr />
            <div>
                <div>
                    <input type="checkbox" name="" id="" />
                </div>
                <div>
                    <img src="" alt="product" />
                </div>
                <div>
                    <p>Product Name</p>
                    <p>additional Info</p>
                </div>
                <div>
                    <p>Price</p>
                    <div>
                        <button>Love </button>
                        <button>Delete</button>
                    </div>
                </div>
                <div>
                    <button className=" border rounded-l-md border-orange-600 text-3xl px-5 py-2">+</button>
                    <span className="border border-orange-600 text-3xl px-5 py-1.5">0</span>
                    <button className="border rounded-r-md border-orange-600 text-3xl px-5 py-2"> - </button>
                </div>
            </div>
        </div>
    )
}