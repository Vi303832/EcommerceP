import { use, useEffect, useState } from 'react'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import AddData from './Pages/AddData'
import Products from "./Pages/Products"
import ThisProduct from "./Pages/ThisProduct"
import Hoodie from './Pages/Hoodie'
import Tshirt from './Pages/Tshirt'
import Sweatshirt from './Pages/Sweatshirt'
import Other from './Pages/Other'
import Auth from './Pages/Auth'
import User from './Pages/User'
import Register from './Pages/Register'
import SetData from "./Pages/SetData"
import { ToastContainer, toast } from 'react-toastify';

import { Routes, Route } from "react-router-dom"
import { Bounce } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { setAuth, setemail, setuid } from './Slices/UserSlice'





function App() {

  let dispatch = useDispatch();



  useEffect(() => {

    const a = localStorage.getItem('uid');
    const b = localStorage.getItem('userEmail');
    a &&
      dispatch(setemail(b))
    dispatch(setuid(a))
    dispatch(setAuth(true))

  }, [])


  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        limit={2}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <Routes>

        <Route path='/AddData' element={<AddData />} />
        <Route path='/SetData' element={<SetData />} />

        <Route path='/Panel' element={<Layout >
          <User />
        </Layout >} />

        <Route path='/Giriş' element={<Layout >
          <Auth />
        </Layout >} />
        <Route path='/Kaydol' element={<Layout >
          <Register />
        </Layout >} />


        <Route path='/' element={<Layout >
          <Home />
        </Layout >} />

        <Route path='/Ürünler' element={<Layout >
          <Products />
        </Layout >} />
        <Route path='/Ürün/:id' element={<Layout >
          <ThisProduct />
        </Layout >} />
        <Route path='/Hoodie' element={<Layout >
          <Hoodie />
        </Layout >} />
        <Route path='/Tshirt' element={<Layout >
          <Tshirt />
        </Layout >} />
        <Route path='/Sweatshirt' element={<Layout >
          <Sweatshirt />

        </Layout >} />
        <Route path='/Other' element={<Layout >
          <Other />
        </Layout >} />
      </Routes>

    </>
  )
}

export default App
