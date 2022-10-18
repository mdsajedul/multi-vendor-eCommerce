import React, { useEffect, useState } from 'react'

export default function Dropdown({name,list,bgColor,textColor,borderColor,...arg}) {
    const [ulState,setUlState]= useState(false)
    const [opneValue,setOpneVlaue] = useState('hidden');

    useEffect(()=>{
        if(ulState){
            setOpneVlaue('');
        }
        else{
            setOpneVlaue('hidden')
        }
    },[ulState])


  return (
    <div onClick={()=>setUlState(!ulState)} class="py-1">
        <div>
            <div class="dropdown relative">
            <button
                class={`dropdown-toggle px-6 py-2.5 bg-${bgColor}-600 text-${textColor}-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-${bgColor}-700 hover:shadow-lg focus:bg-${bgColor}-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-${bgColor}-800 active:shadow-lg active:text-${textColor}-700 transition duration-150 ease-in-out flex items-center whitespace-nowrap border-2 border-${borderColor}-400 `}
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                {name}
                <svg
                aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                >
                <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                ></path>
                </svg>
            </button>

            <ul
                class={`dropdown-menu min-w-max  absolute ${opneValue}  bg-white text-base z-50 float-left py-2 list-none  text-left rounded-lg shadow-lg mt-1   m-0 bg-clip-padding border-none " aria-labelledby="dropdownMenuButton1`}
            >
                {
                    list.map((item)=> (
                        <li key={item?.value}>
                            <span
                                class=" dropdown-item text-sm  z-50 py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 "
                                >{item?.text}</span>
                        </li>
                        // <div>{item?.value}</div>
                    ))
                }
                
            </ul>
            </div>
        </div>
    </div>
  )
}
