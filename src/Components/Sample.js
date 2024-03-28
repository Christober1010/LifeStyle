import React, { useEffect, useState } from 'react'
import './sample.css'
import OwlCarousel from 'react-owl-carousel';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Sample() {

    const navigate = useNavigate()
    const [isloading, setIsloading] = useState(true)

    const [products, setProducts] = useState([])

    const getData = () => {
        axios.get("https://65f15271da8c6584131d6662.mockapi.io/E-Commerce").then((res) => {
            setProducts(res.data)
            setIsloading(false)
            // console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            {
                isloading ? <div className='text-center fw-bold'>Loading</div> :  <div>
                <h5>Best Sellers</h5>
                <div className='product-outer container d-flex'>
                    <OwlCarousel className='owl-theme' >
                        {
                            products.map((item) => {
                                return <div className='product-box m-2 p-3' onClick={() => navigate('/products')}>
                                    <div>
                                        <img src={item.img} />
                                    </div>
                                    <div className='text-center'>
                                        <p>{item.name}</p>
                                        <p>Price ${item.price}</p>
                                    </div>
                                </div>
                            })
                        }
                    </OwlCarousel>
                </div>
            </div>
            }
           
        </>
    )
}

export default Sample