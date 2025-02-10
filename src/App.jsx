import { useState } from 'react'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import AddData from './Pages/AddData'
import Products from "./Pages/Products"
import ThisProduct from "./Pages/ThisProduct"
import Hoodie from './Pages/Hoodie'
import Tshirt from './Pages/Tshirt'
import Sweatshirt from './Pages/Sweatshirt'
import Other from './Pages/Other'

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
