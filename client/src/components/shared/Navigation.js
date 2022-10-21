import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/icons/dokanIcon.svg"
import cartIcon from "../../assets/icons/cart.png"
import loveIcon from "../../assets/icons/love.png"
import searchIcon from "../../assets/icons/search.png"
import ProfileMenu from "../ui/ProfileMenu"
import { useSelector } from 'react-redux';

export default function Navigation() {

  const [productCountOnCart,setProductCountOnCart]= useState(0)

  const {user} = useSelector((state)=> state.auth)
  const {cart} = useSelector((state)=>state.cart)

  useEffect(()=>{
    let total = 0;
    cart.forEach(product => {
      total += product.quantity
    });
    setProductCountOnCart(total)
  },[cart])
  
  
  let links = [
      {name:"ABOUT",link:"/"},
      {name:"CUSTOMER CARE",link:"/"},
  ]
  const [open,setOpen] = useState(false);
  return (
      <>
      {/* top bar  */}
      <nav className='w-full z-[3] text-gray-500 relative flex items-center'>
        <p className='px-5 py-1'>Best online shop ever</p>
        <Link to='beseller' className='hover:text-orange-600'>Sell On Dokan</Link>
      </nav>

      {/* mail nav bar  */}
      <nav className='shadow-md w-full sticky top-0 z-10'>
          <div className='md:flex items-center justify-between bg-white py-3 md:px-10 px-7'>
              <Link to={"/"} className=' font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                  <span className=' z-[3] text-3xl mr-1'>
                    <img className='h-12' src={logo} alt="" />
                  </span>
              </Link>

              {/* search form  */}
              <form className='m-auto w-80 flex items-center'  action="">
                <input placeholder='Search on Dokan' className="form-control h-10 block w-full my-1.5 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border  border-solid border-orange-300 rounded-l transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-500 focus:ring-orange-500 focus:outline-none" type='text'></input>
                <img className=' block my-1.5 px-3 py-2 h-10 text-base font-normal text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700 rounded-r transition ease-in-out m-0 cursor-pointer' src={searchIcon}  alt=''/>
              </form>
              
              {/* div  */}
              {/* cart  */}
              
            

              <div onClick={()=>setOpen(!open)} className='z-[3] text-3xl absolute right-8  top-6 cursor-pointer md:hidden'>
                  <ion-icon name={open ? 'close':'menu'}></ion-icon>
              </div>
              <ul className={` md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-480px]'}`}>
                {
                  links.map((link)=>(
                    <li key={link.name} className='md:ml-8 text-md md:my-0 my-7'>
                      <Link to={link.link} className='text-orange-600 hover:text-orange-400 duration-500'>{link.name}</Link>
                    </li>
                  ))
                }
                <Link to='/cart' className='md:px-5 py-3 relative md:mb-0 cursor-pointer'>
                  {productCountOnCart > 0 && <span className='rounded-full px-1 absolute -top-3 md:-top-1 md:left-10 left-6 bg-orange-500 text-white'>{productCountOnCart}</span>}
                  <img className='h-6'src={cartIcon} alt="" />
                </Link>
                <div className='md:pr-5'>
                    <img  className='h-6' src={loveIcon} alt="" />
                </div>
                <div className='text-center'>
                    {user? <span className=''><ProfileMenu user={user}/></span> : <Link to={"/login"} > SIGNUP / LOGIN</Link>}
                </div>
                
            </ul>
          </div>
      </nav>
      </>
      
  )
}
