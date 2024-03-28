import React, { useEffect, useState } from 'react'
import './products.css'
import pic from '../images/login_img.png'
import axios from 'axios'
import toast from 'react-hot-toast'



function Products({fetchCartData}) {
    const [data, setData] = useState([])
    const [isloading, setIsloading] = useState(true)

    const fetchData = () => {
        axios.get("https://65f15271da8c6584131d6662.mockapi.io/resource").then((res) => {
            // console.log(res.data)
            setIsloading(false)
            setData(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    const handleAddtocart=(data)=>{
        axios.post("https://660513e12ca9478ea17f38c6.mockapi.io/newcart",data).then((res)=>{
            toast.success("Added to cart")
            fetchCartData()
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div>
            <div className='container'>
                {
                    isloading ? <div className='text-center'>Loading...</div> : <div className='row mt-5 justify-content-center'>
                        {
                            data.map((item) => {
                                return <div className='col-3 m-3'>
                                    <div className='product-div p-1'>
                                        <div className='img-div text-center mt-2'>
                                            <img src={item.image} height={'100%'} />
                                        </div>
                                        <div className='mt-4 px-4'>
                                            <span className='badge bg-success p-1'>{item.rating} <i className='fa fa-star'></i></span>
                                            <p className='m-0'>{item.productname}</p>
                                            <span><b>$ {item.offerprice}</b></span><span className='text-decoration-line-through'>{item.price}</span>
                                            <p>{item.descritpion}</p>
                                        </div>
                                        <div className='d-flex'>
                                            <button className='cart-btn' onClick={()=>handleAddtocart(item)}><i className='fa fa-shopping-cart'></i> ADD TO CART</button>
                                            <button className='buy-btn'><i className=' fa fa-bolt'></i> BUY NOW</button>
                                        </div>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                }

            </div>
        </div>
    )
}

export default Products