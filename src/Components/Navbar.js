import React, { useState } from 'react'
import './navbar.css'
import { Modal, ModalBody } from 'reactstrap'
import Login from './Login'
import Signup from './Signup'
import { useNavigate } from 'react-router-dom'



function Navbar({ cartData, setCartData }) {
    const [islogin, setIslogin] = useState(false)
    const [issignup,setIsignup]=useState(false)
    
    const navigate=useNavigate()
    const toggleSignup=()=>{
        setIslogin(!islogin)
        setIsignup(!issignup)
    }
    
    const toggleLogin=()=>{
        setIsignup(!issignup)
        setIslogin(!islogin)
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid text-light">
                    <h1>Lifestyle</h1>

                    <div class="nav-texts navbar-collapse">
                        <div class="navbar-nav">
                            <a class="nav-link text-light" href="/">Home</a>
                            <a class="nav-link text-light" href="/products">Products</a>
                            <a class="nav-link text-light" href="#">Pricing</a>
                        </div>
                    </div>
                    <div>
                        <button className='btn btn-warning mx-2' onClick={() => setIslogin(!islogin)}><i className='fa fa-user'></i> Log in</button>
                        <button 
                            className='btn btn-dark mx-2' 
                            onClick={()=>navigate('/cart')}>
                            <i className='fa fa-shopping-cart'></i> Cart <span className='badge'>{cartData.length}</span>
                        </button>
                    </div>
                </div>
            </nav>
            <Modal isOpen={islogin} toggle={() => setIslogin(!islogin)} centered size='lg'>
                <ModalBody  className='p-0'>
                    <Login toggleSignup={toggleSignup}></Login>
                </ModalBody>
            </Modal>
            <Modal isOpen={issignup}toggle={()=>setIsignup(!issignup)} centered size='lg'>
                <ModalBody className='p-0'>
                    <Signup toggleLogin={toggleLogin}></Signup>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default Navbar