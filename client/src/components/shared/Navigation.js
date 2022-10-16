import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/icons/dokanIcon.svg"
import cartIcon from "../../assets/icons/cart.png"
import loveIcon from "../../assets/icons/love.png"
import searchIcon from "../../assets/icons/search.png"

export default function Navigation() {

  
  let links = [
      {name:"ABOUT",link:"/"},
      {name:"CUSTOMER CARE",link:"/"},
  ]
  const [open,setOpen] = useState(false);
  return (
      <>
      {/* top bar  */}
      <nav className='w-full z-[3] text-gray-500 relative '>
        <p className='px-5 py-1'>Best online shop ever</p>
      </nav>

      {/* mail nav bar  */}
      <nav className='shadow-md w-full sticky top-0'>
          <div className='md:flex items-center justify-between bg-white py-3 md:px-10 px-7'>
              <Link to={"/"} className=' font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                  <span className=' z-[3] text-3xl mr-1'>
                    <img className='h-12' src={logo} alt="" />
                  </span>
              </Link>

              {/* search form  */}
              <form className='m-auto w-80 inline-flex'  action="">
                <input placeholder='Search on Dokan' className="bg-slate-50 border-r-0 border-orange-500 px-1 w-64 rounded-l-sm focus:outline-none focus:border-orange-500 focus:ring-orange-500 text-gray-500" type='text'></input>
                <img className='bg-orange-500 text-white px-3 border border-l-0 border-orange-500 p-2 rounded-r-sm cursor-pointer h-11' src={searchIcon}  alt=''/>
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
                <div className='px-5'>
                  <img className='h-6'src={cartIcon} alt="" />
                </div>
                <div className='pr-5'>
                    <img  className='h-6' src={loveIcon} alt="" />
                </div>
                <Link to={"/login"} > SIGNUP / LOGIN</Link>
            </ul>
          </div>
      </nav>
      </>
      
  )
}
