import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginImage from '../../assets/icons/login.svg';
import { useLoginMutation, useRegisterMutation } from '../../features/auth/authApi';
import isValidEmail from '../../utils/isValidEmail';

export default function Login() {

  
    // optons for gender dropdown 
    const genderOptions = [
      {value:'', text:'Gender'},
      {value:'male', text:'Male'},
      {value:'female', text:'Female'},
      {value:'other', text:'Other'},
    ]
  

  const [registerActive,setRegisterActive] = useState(false);
  const [email,setEmail] =useState('');
  const [password,setPassword] = useState('');
  const [rePassword,setRePassword] = useState('');
  const [dob,setDob] = useState('');
  const [gender,setGender] = useState(genderOptions[0].value);
  const [fullname,setFullname] = useState('');
  const [errMsg,setErrMsg]=useState('');
  

  const [login,{data:loginResData,isLoading, error: loginResError} ] = useLoginMutation();
  const [register,{data:registerResData,error:registerResError}]= useRegisterMutation();

  const navigate = useNavigate();


  useEffect(()=>{
        if(loginResError?.data){
              setErrMsg(loginResError.data)
        }
        else if(registerResError?.data){
              setErrMsg(registerResError.data)
        }
        else if(loginResData?.accessToken && loginResData?.user){
              navigate(-1? -1 : '/');
        }
        else if(registerResData?.accessToken && registerResData?.user){
              navigate('/');
        }
  },[navigate,loginResData,registerResData,loginResError,registerResError])


// function for login page and register toggle 
  const handleRegisterActive = ()=>{
        if(registerActive){
            setRegisterActive(false)
        }
        else{
            setRegisterActive(true)
        }
  }

  const handleSubmit = (e)=>{
        e.preventDefault();
        setErrMsg('');
        if(!registerActive){
            if(isValidEmail(email)){
              login({
                email,password
              })
            }
            else{
              setErrMsg('Please enter a valid email')
            }
        }
        else{
            if(password===rePassword){
              if(isValidEmail(email)){
                    register({
                      name:fullname,
                      email,
                      password,
                      dob,
                      gender
                    })
              }
              else{
                setErrMsg('Please enter a valid email')
              }
            }
            else{
              setErrMsg('Password not matched');
            }
        }
  }
  // console.log(errMsg)
  return (
    <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div
            className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
          >
            <div
              className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
            >
              <img
                src={loginImage} className="w-full" alt="Sample" />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form onSubmit={handleSubmit}>
                { !registerActive && <div className="flex flex-row items-center justify-center lg:justify-start">
                  <p className="text-lg mb-0 mr-4">Sign in with</p>
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block p-3 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                  >
                    {/* <!-- Facebook --> */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4">
                      {/* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                      <path
                        fill="currentColor"
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block p-3 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                  >
                    {/* <!-- Twitter --> */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4">
                      {/* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                      <path
                        fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block p-3 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                  >
                    {/* <!-- Linkedin --> */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4">
                      {/* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                      <path
                        fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                      />
                    </svg>
                  </button>
                </div>}

                { !registerActive && <div
                  className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                >
                  <p className="text-center font-semibold mx-4 mb-0">Or</p>
                </div>}

                {/* name input filed  */}
                {registerActive && <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none focus:ring-0"
                    id="exampleFormControlInput2"
                    placeholder="Full name"
                    value={fullname}
                    onChange={(e)=> setFullname(e.target.value)}
                  />
                </div>}

                {/* email address filed  */}
                <div className="mb-6">
                  <input
                    type="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none focus:ring-0"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                  />
                </div>

                {/* password filed  */}
                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none focus:ring-0"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    onChange={(e)=> setPassword(e.target.value)}
                    value={password}
                  />
                </div>

                {/* re enter password filed  */}
                {registerActive && <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none focus:ring-0"
                    id="exampleFormControlInput2"
                    placeholder="Re-Password"
                    value={rePassword}
                    onChange={(e)=>setRePassword(e.target.value)}
                  />
                </div>}

              {/* date of birth & 
              gender selection  */}

                {registerActive && <div className='mb-6 flex justify-between'>
                  {/* date of birth  */}
                      <input type="date" className='form-control block px-4 py-2 text-xl font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none focus:ring-0' onChange={(e)=>setDob(e.target.value)}/>
                      
                      {/* gender  */}
                      <div>
              
                        <select className='form-control px-9 py-2 text-xl font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none focus:ring-0'
                         onChange={(e)=> setGender(e.target.value)}
                         value={gender}
                         >
                          {
                            genderOptions.map(option=>(
                              <option className= 'hover:bg-orange-700' key={option.value} value={option.value}>{option.text}</option>
                            ))
                          }
                        </select>

                      </div>

                </div>}

                {/* checkbox and forget password  */}

                {!registerActive && <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-orange-600 checked:border-orange-600
                       hover:bg-orange-700 active:bg-orange-700 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer "
                      id="exampleCheck2"
                    />
                    <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2"
                      >Remember me</label
                    >
                  </div>
                  <a href="#!" className="text-gray-800">Forgot password?</a>
                </div>}

                <div className="text-center lg:text-left">
                  <button
                    type="submit" 
                    className="inline-block px-7 py-3 bg-orange-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    {registerActive? 'SIGN UP' : 'LOGIN'}
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    
                    {registerActive? "Already have an account?" : "Don't have an account?"}
                    <span
                      href="#!"
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out cursor-pointer" onClick={handleRegisterActive}
                      > { registerActive? 'Sign in' : 'Register'}</span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
    </section>

  )
}
