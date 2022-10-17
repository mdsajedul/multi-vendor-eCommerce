import React from 'react'
import Banner from '../../components/home/banner/Banner'
import ProductCard from '../../components/products/ProductCard';
import Category from '../../components/shared/Category'
import Error from '../../components/ui/Error';
import { useGetProductsQuery } from '../../features/products/productsApi'

export default function Home() {
  const {data: products, isLoading, isError, error} = useGetProductsQuery();

  let productsContent;
  if(isLoading){
    productsContent= <div>Loading...</div>
  }
  else if(!isLoading && isError){
    productsContent= <Error message={error}/>
  }
  else if(!isLoading && !isError && products.length === 0){
    productsContent = <span>No product found!</span>
  }
  else if(!isLoading && !isError && products.length > 0){
    productsContent = products.map(product=> <ProductCard key={product?._id} product={product}/>)
  }

  return (
    <>
        <div className="md:grid md:grid-cols-7 md:gap-4">
            <div className='md:col-span-2 '>
                <Category/>
            </div>
            <div className='md:col-span-5'>
                <Banner/>
            </div>
        </div>
        <div>

              {/* flash sale  */}
            <div className=' m-auto md:px-7 px-4 pt-10 '>
                    <h3 className='text-3xl text-gray-700'>Flash Sale</h3>
                    <div className='w-full bg-white'>
                        <div className='flex justify-between px-5 py-2'>
                            <span>On Sale Now</span>
                            <span>Ending in </span>
                            <button>SHOP MORE</button>
                        </div>
                        <hr />
                        <div className='columns-6 gap-2 p-2'>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                            <div>5</div>
                            <div>6</div>
                        </div>
                    </div>
              </div>

          {/* Just for you  */}

            <div className='m-auto md:px-7 px-4 pt-10'>
                <h3 className='text-3xl text-gray-700'>Just For You</h3>
                <div  className='w-full'>
                    <div className='grid md:grid-cols-6 grid-cols-2 gap-2 p-2'>
                            {
                              productsContent
                            }
                    </div>
                </div>
            </div>

        </div>
    </>
    
  )
}
