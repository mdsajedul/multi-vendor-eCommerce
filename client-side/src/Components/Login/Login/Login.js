import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css'
import loginImg from '../../../Assets/icons/login.svg'
import { Form } from 'react-bootstrap';


const Login = () => {

    const [pageStatus,setPageStatus] = useState('login')
    const [email,setEmail] =useState('')
    const [password,setPassword] = useState('')
    const [rePassword,setRePassword] = useState('')
    const [dob,setDob] = useState('')
    const [gender,setGender] = useState('male')
    const [fullname,setFullname] = useState('')

    const login =(e)=>{
        e.preventDefault()
        console.log(email)
        console.log(password)
    }

    const registration = (e) =>{
        e.preventDefault()
        console.log(email)
        console.log(password)
        console.log(rePassword)
        console.log(fullname)
        console.log(dob)
        console.log(gender)
    }

    return (
        <div className='login-container'>
            <div className='container  py-4'>
                <div className='p-5 login-cart'>

                {
                    pageStatus==='login'?

                    <div className='d-flex justify-content-between'>
                        <h3>Welcome to Dokan! Please login</h3>
                        <p>New member? <Link to='' onClick={()=>{setPageStatus('register')}} >Register</Link> here.</p>
                    </div>

                    :

                    <div className='d-flex justify-content-between'>
                        <h3>Welcome to Dokan! Please complete your registration</h3>
                        <p>Already a member? <Link to='' onClick={()=>{setPageStatus('login')}} >Login</Link> here.</p>
                    </div>
                }

                    
                    <div className='form-card m-2 p-4 row gx-0'>
                        <div className="col-lg-6 ">
                            <img className='container-fluid' src={loginImg} alt="" />
                        </div>
                        <div className="col-lg-6 d-flex  justify-content-center align-items-center">
                            
                            <form action="">
                                <div>
                                    <label htmlFor="">Email</label> <br />
                                    <input type="text" onChange={(event)=>{setEmail(event.target.value)}} name="" id="" placeholder='Please enter your Email' />
                                </div>
                                <div>
                                    <label htmlFor=""> Password</label> <br />
                                    <input type="password" onChange={(event)=>{setPassword(event.target.value)}} name="" id="" placeholder='Please enter your Password' />
                                </div>

                                {
                                    pageStatus==='register' && 

                                    <div>
                                         <div>
                                            <label htmlFor=""> Password</label> <br />
                                            <input type="password" onChange={(event)=>{setRePassword(event.target.value)}} name="" id="" placeholder='Please Re-enter your Password' />
                                        </div>

                                        <div>
                                            <label htmlFor=""> Full Name</label> <br />
                                            <input type="text" onChange={(event)=>{setFullname(event.target.value)}} name="" id="" placeholder='Please enter your Fullname' />
                                        </div>

                                        <div className='row gx-0'>
                                            <div className="col-lg-8">
                                                <Form.Group controlId="dob">
                                                    <Form.Label>Select Date</Form.Label>
                                                    <Form.Control onChange={(event)=>{setDob(event.target.value)}} type="date" name="dob" placeholder="Date of Birth" />
                                                </Form.Group>
                                            </div>
                                            <div className="col-lg-4">
                                                <Form.Label>Gender</Form.Label>
                                                <select onChange={(event)=>{setGender(event.target.value)}} class="form-select" aria-label="Default select example">
                                                    <option selected value="male">Male</option>
                                                    <option value="female">Female</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    
                                }

                                {
                                    pageStatus==='login'? 
                                    <div>
                                        <div className='d-flex justify-content-end'>
                                            <Link to=''>Forget Password?</Link>
                                        </div>
                                        <div>
                                            <input onClick={login} type="submit" value='Login' />
                                        </div>

                                        <div>
                                            <p>Or, login with</p>
                                            <button className='login-btn'> Google </button>
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <div>
                                            <input onClick={registration} type="submit" value='Registration' />
                                        </div>
                                    </div>
                                }

                                
                                
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>      
        </div>
        
    );
};

export default Login;