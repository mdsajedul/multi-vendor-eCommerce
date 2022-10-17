


export default function Category (){

    const categories = [
        "Women Fashaon",
        "Health & Beauty",
        "Mens Fashaon",
        "Babies & Toys",
        "Electronics",
        "TV and Home Appliance",
        "Groceries & Pets",
        "Home and Lifestyle",
        "Sports & Outdoor",
        "Automotive and Motorbike"
    ]

    return(
        <div className="w-12/12">
            <div className=" flex justify-center px-5">
                <ul className="bg-white p-2">
                    {
                    categories.map(category=> <li className="py-1">{category}</li>)
                    }
                </ul>
            </div>
        </div>
        
        
    )
}