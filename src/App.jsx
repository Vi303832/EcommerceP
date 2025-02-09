import { useState } from 'react'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import AddData from './Pages/AddData'

import { Routes, Route } from "react-router-dom"
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout >
          <Home />
        </Layout >} />
        <Route path='/AddData' element={<AddData />} />

      </Routes>

    </>
  )
}

export default App
