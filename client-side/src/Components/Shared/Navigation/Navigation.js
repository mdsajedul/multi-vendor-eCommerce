import React from 'react';
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser,faHeart } from '@fortawesome/free-regular-svg-icons'
import dokanIcon from '../../../Assets/icons/dokanIcon.svg'
import './navigation.css'
import { useSelector } from 'react-redux';
import ProfileDropdownMenu from '../ProfileDropdownMenu/ProfileDropdownMenu';


const Navigation = () => {

    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const {isAuth,isLoading,user,error} = useSelector((state)=>state.loginReducer)
    

    
    const local = JSON.parse(localStorage.getItem('user'))
    console.log(local.isAuth)
    


    const shoppingCartIcon = <FontAwesomeIcon style={{color:'#DE7127'}} icon={faCartShopping} />
    const userIcon = <FontAwesomeIcon style={{color:'#DE7127'}}  icon={faUser} />
    const heartIcon = <FontAwesomeIcon style={{color:'#DE7127'}} icon={faHeart} />
    const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />


    return (
        <div>
            <div className='top-nav'>
            <Navbar className='p-0'>
                <Container>
                    <Navbar.Text> Welcome to Dokan mega store!</Navbar.Text>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Link className='top-link' to=''>Customer Care</Link>
                        <Link className='top-link' to=''>Track My Order</Link>
                        <NavDropdown className='dropdown-ln' title="Language" id="collasible-nav-dropdown">
                            <NavDropdown.Item className='dropdown-content' href="#action/3.1">Bangla</NavDropdown.Item>
                            <NavDropdown.Item className='dropdown-content' href="#action/3.2">English</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>

            <div className='middle-nav'>
                <Navbar collapseOnSelect expand="lg"  >
                    <Container>
                        <Link to="/home"><img src={dokanIcon} height='65px' alt="" /> </Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto ">
                                <form className="d-flex form-style">
                                    <input type="text" placeholder='Search' />
                                    
                                    <button  className='search-btn'>{searchIcon}</button>
                                </form>
                            </Nav>
                            <Nav>
                                <button className='middle-btn' onClick={toggleDrawer}>{shoppingCartIcon}</button>
                                <button className='middle-btn' onClick={toggleDrawer}>{heartIcon}</button>
                                
                                
                            {
                                isAuth? <div className='d-flex   align-items-center'>
                                    <ProfileDropdownMenu user = {user} isAuth={isAuth} isLoading ={isLoading} error={error}/>
                                </div> :
                                    <Link to='/login'  style={{color:'#DE7127'}} className='middle-btn'> 
                                        <div className='d-flex align-items-center'>
                                        {userIcon}
                                            <div style={{fontSize:'14px',paddingLeft:'10px'}}>
                                                Login <br /> Signup
                                            </div>
                                        </div>  
                                    </Link>
                            }

                                


                                <Drawer
                                    open={isOpen}
                                    onClose={toggleDrawer}
                                    direction='right'
                                    className='bla bla bla'
                                    size='350px'
                                >
                                    <div>
                                        <h1>No product on cart</h1>
                                    </div>
                                </Drawer>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Navigation;