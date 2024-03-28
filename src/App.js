import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Slides from './Components/Slides';
import Sample from './Components/Sample';
import '../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import Products from './Components/Products';
import Cart from './Components/Cart';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Checkout from './Components/Checkout';

function App() {

  const [cartData,setCartData]=useState([])
  
  const fetchCartData = (() => {
    axios.get('https://660513e12ca9478ea17f38c6.mockapi.io/newcart').then((res)=>{
    setCartData(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  })

  useEffect(()=>{
    fetchCartData()
  },[])
  
  return (

    <div>
      <BrowserRouter>
        <Navbar cartData={cartData} setCartData={setCartData}></Navbar>
        <Slides></Slides>
        <Routes>
          <Route path='/' element={<Sample />}></Route>
          <Route path='/products' element={<Products fetchCartData={fetchCartData} ></Products>}></Route>
          <Route path='/cart' element={<Cart cartData={cartData} setCartData={setCartData} fetchCartData={fetchCartData}/> }></Route>
          <Route path='/checkout' element={<Checkout cartData={cartData} setCartData={setCartData} fetchCartData={fetchCartData}/>}></Route>
        </Routes>
        <Toaster/>
      </BrowserRouter>
    </div>
  );
}

export default App;
