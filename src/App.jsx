import { useState } from 'react'
import Layout from './Pages/Layout'
import Home from './Pages/Home'


import { Routes, Route } from "react-router-dom"
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout >
          <Home />
        </Layout >} />

      </Routes>

    </>
  )
}

export default App
