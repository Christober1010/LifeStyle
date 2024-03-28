import React from 'react'
import pic from '../images/login_img.png'
import './cart.css'
import { format } from 'date-fns'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Cart({ cartData, setCartData,fetchCartData }) {
    const totalAmount=cartData.reduce((prev,curr)=>prev+Number(curr.offerprice),0)
    const navigate=useNavigate()

    const removeItem=(id)=>{
        axios.delete(`https://660513e12ca9478ea17f38c6.mockapi.io/newcart/${id}`).then((resp)=>{
            toast.success("Item removed")
            fetchCartData()
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-7 cart-left'>

                        {
                            cartData && cartData.map((item) => {
                                return <div className='row'>
                                    <div className='col-2 inner'>
                                        <img src={item.image} height={'80px'} />
                                    </div>
                                    <div className='col-8 inner px-3'>
                                        <div className='px-3'>
                                            <div>{item.productname}</div>
                                            <p>{item.description} </p>
                                            <p>
                                                <span>Price $</span><span className='text-decoration-line-through mx-1'>{item.price}</span>
                                                <span><b>{item.offerprice}</b></span>
                                                <span className='text-success mx-1'><b>75% Offer</b></span>
                                            </p>
                                            <button className='btn btn-danger' onClick={()=>removeItem(item.id)}>Remove</button>
                                        </div>
                                    </div>
                                    <div className='col-2 inner'>
                                        <div>
                                            <p>Delivery by APR 2024</p>
                                            <span>$<span className='text-decoration-line-through'>40</span>FREE</span>
                                        </div>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                    <div className='col-4  px-4'>
                        <div className='cart-right'>
                        <h6>PRICE DETAILS</h6>
                        <li class="list-group-item"><div className='d-flex justify-content-between'><h6>Items</h6><h6>{cartData.length}</h6></div></li>
                        <li class="list-group-item"><div className='d-flex justify-content-between'><h6>Discount</h6><h6>-$40</h6></div></li>
                        <li class="list-group-item"><div className='d-flex justify-content-between'><h6>Delivery Charges</h6><h6><span  className='text-decoration-line-through'>$10</span><span className='text-success'>FREE</span></h6></div></li>
                        <li class="list-group-item"><div className='d-flex justify-content-between'><h5>Total Amount</h5><h5>{totalAmount}</h5></div></li>
                        <button className='btn btn-success fw-bolder w-100 mt-4' onClick={()=>navigate('/checkout')}>CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart