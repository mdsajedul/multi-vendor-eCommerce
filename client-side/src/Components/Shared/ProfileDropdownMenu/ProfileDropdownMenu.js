import React, { useRef, useState } from 'react';
import './profileDropdown.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faList,faStar,faCircleXmark,faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';


const ProfileDropdownMenu = ({user,isAuth,isLoading,error}) => {


    const userIcon = <FontAwesomeIcon  icon={faUser} />
    const orders = <FontAwesomeIcon  icon={faList} />
    const heart = <FontAwesomeIcon  icon={faHeart} />
    const review = <FontAwesomeIcon  icon={faStar} />
    const cancel = <FontAwesomeIcon  icon={faCircleXmark} />
    const logout = <FontAwesomeIcon  icon={faRightFromBracket} />

    const [transformValue,setTransformValue] = useState(0)

    const toggleFunc =(e)=>{
        e.preventDefault()
        if(transformValue===0){
            setTransformValue(1)
        }
        else if(transformValue===1){
            setTransformValue(0)
        }
    }

    return (
        <div>
           <div class="container">
            <div>
            <button   onClick={toggleFunc} class="click">{user?.user?.name.split(' ')[0]}</button>

                <div class="list card p-2" style={{transform:`scaleY(${transformValue})`}} >
                    
                        <Link to=''> 
                            <table>
                                {
                                    user?.user?.role=== 'user'? 
                                <tr>
                                    <td>{userIcon}</td>
                                    <td>Manage Account</td>
                                </tr>
                                :
                                <tr>
                                    <td>{userIcon}</td>
                                    <td>Dashboard</td>
                                </tr>
                                }
                                
                            </table>
                        </Link>
                        <Link to=''> 
                            <table>
                                <tr>
                                    <td>{orders}</td>
                                    <td>My orders</td>
                                </tr>
                            </table>
                        </Link>
                        <Link to=''> 
                            <table>
                                <tr>
                                    <td>{heart}</td>
                                    <td>My Wishlist</td>
                                </tr>
                            </table>
                        </Link>
                        <Link to=''> 
                            <table>
                                <tr>
                                    <td>{review}</td>
                                    <td>My Reviews</td>
                                </tr>
                            </table>
                        </Link>
                        <Link to=''> 
                            <table>
                                <tr>
                                    <td>{cancel}</td>
                                    <td>My Return</td>
                                </tr>
                            </table>
                        </Link>
                        <button className='log-out-btn'>
                            <table >
                                    <tr>
                                        <td>{logout}</td>
                                        <td>Logout</td>
                                    </tr>
                                </table>
                        </button>
                </div>
            </div>
               
            </div>
        </div>
    );
};

export default ProfileDropdownMenu;