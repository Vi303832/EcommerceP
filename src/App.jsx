import { useState } from 'react'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import AddData from './Pages/AddData'
import Products from "./Pages/Products"
import ThisProduct from "./Pages/ThisProduct"

import { Routes, Route } from "react-router-dom"
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout >
          <Home />
        </Layout >} />
        <Route path='/AddData' element={<AddData />} />
        <Route path='/Ürünler' element={<Layout >
          <Products />
        </Layout >} />
        <Route path='/Ürün/:id' element={<Layout >
          <ThisProduct />
        </Layout >} />

      </Routes>

    </>
  )
}

export default App
