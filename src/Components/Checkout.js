import axios from 'axios'
import React from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Checkout({ cartData, setCartData, fetchCartData }) {
    const totalAmount = cartData.reduce((prev, curr) => prev + Number(curr.offerprice), 0)
    const navigate = useNavigate()
    const handlePayment = () => {
        cartData.map((list) => {
            axios.delete(`https://660513e12ca9478ea17f38c6.mockapi.io/newcart/${list.id}`).then((resp) => {
                fetchCartData()
            }).catch((err) => {
                console.log(err)
            })

        })
        toast.success("Your order is placed successfully")
        navigate('/')
    }
    return (
        <div>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-8'>
                        {
                            cartData.length === 0 ? <div>Add items to show in cart</div>: <div className='row w-75 m-auto'>

                            <div className='col-12'>
                                <div class="mb-3">
                                    <label class="form-label">Name</label>
                                    <input type="text" class="form-control" placeholder="Enter your name as in card" />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    <label class="form-label">Card Number</label>
                                    <input type="number" class="form-control" maxLength={16} placeholder="1234 5678 9012 3456" />
                                </div>
                            </div>
                            <div className='col-6'>
                                <div class="mb-3">
                                    <label class="form-label">Expiry Date</label>
                                    <input type="date" class="form-control" placeholder="DD/MM/YYYY" />
                                </div>
                            </div>
                            <div className='col-6'>
                                <div class="mb-3">
                                    <label class="form-label">CCV</label>
                                    <input type="number" class="form-control" placeholder="123" maxLength={3} />
                                </div>
                            </div>
                            <button className='btn btn-success w-100' onClick={() => handlePayment()}>Pay $ {totalAmount}</button>
                        </div>
                        }
                       
                    </div>
                    <div className='col-4'>

                        <div className='cart-right'>
                            <h6>PRICE DETAILS</h6>
                            <li class="list-group-item"><div className='d-flex justify-content-between'><h6>Items</h6><h6>{cartData.length}</h6></div></li>
                            <li class="list-group-item"><div className='d-flex justify-content-between'><h6>Discount</h6><h6>-$40</h6></div></li>
                            <li class="list-group-item"><div className='d-flex justify-content-between'><h6>Delivery Charges</h6><h6><span className='text-decoration-line-through'>$10</span><span className='text-success'>FREE</span></h6></div></li>
                            <li class="list-group-item"><div className='d-flex justify-content-between'><h5>Total Amount</h5><h5>{totalAmount}</h5></div></li>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Checkout